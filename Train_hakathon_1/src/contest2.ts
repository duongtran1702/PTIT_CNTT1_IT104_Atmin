import * as readlineSync from "readline-sync";

/* ===================== Models ===================== */

class Passenger {
  private static nextId = 1;
  public readonly passengerId: number;

  constructor(public name: string, public passportNumber: string) {
    this.passengerId = Passenger.nextId++;
  }

  getDetails(): string {
    return `Passenger(ID=${this.passengerId}) - ${this.name} | Passport: ${this.passportNumber}`;
  }
}

abstract class Flight {
  constructor(
    public readonly flightNumber: string,
    public origin: string,
    public destination: string,
    public departureTime: Date,
    public capacity: number,
    public bookedSeats: number = 0
  ) {}

  bookSeat(): boolean {
    if (this.isFull()) return false;
    this.bookedSeats += 1;
    return true;
  }

  bookSeats(n: number): boolean {
    if (n <= 0) return false;
    if (this.bookedSeats + n > this.capacity) return false;
    this.bookedSeats += n;
    return true;
  }

  releaseSeats(n: number): void {
    this.bookedSeats = Math.max(0, this.bookedSeats - n);
  }

  isFull(): boolean {
    return this.bookedSeats >= this.capacity;
  }

  abstract calculateBaggageFee(weightKg: number): number; // return fee in VND
}

const USD_TO_VND = 25_000;

class DomesticFlight extends Flight {
  calculateBaggageFee(weightKg: number): number {
    // 50,000 VND/kg
    return weightKg * 50_000;
  }
}

class InternationalFlight extends Flight {
  calculateBaggageFee(weightKg: number): number {
    // 10 USD/kg -> quy đổi VND
    return weightKg * 10 * USD_TO_VND;
  }
}

class Booking {
  private static nextId = 1;
  public readonly bookingId: number;
  public totalCost: number;

  constructor(
    public passenger: Passenger,
    public flight: Flight,
    public numberOfTickets: number,
    public baggageWeightPerTicketKg: number,
    public baseTicketPriceVND: number
  ) {
    this.bookingId = Booking.nextId++;
    // Tổng = vé + phí hành lý (tính theo loại chuyến bay)
    const baggageFee = flight.calculateBaggageFee(baggageWeightPerTicketKg);
    this.totalCost = numberOfTickets * (baseTicketPriceVND + baggageFee);
  }

  getBookingDetails(): string {
    return `Booking(ID=${this.bookingId}) - Passenger: ${this.passenger.name} | Flight: ${this.flight.flightNumber} | Tickets: ${this.numberOfTickets} | Total: ${formatVND(
      this.totalCost
    )}`;
  }
}

/* ===================== Repository (Generic) ===================== */

class GenericRepository<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }

  find(predicate: (item: T) => boolean): T | undefined {
    return this.items.find(predicate);
  }

  findIndex(predicate: (item: T) => boolean): number {
    return this.items.findIndex(predicate);
  }

  remove(predicate: (item: T) => boolean): void {
    this.items = this.items.filter(item => !predicate(item));
  }
}

/* ===================== Airline Manager ===================== */

class AirlineManager {
  private flightRepo = new GenericRepository<Flight>();
  private passengerRepo = new GenericRepository<Passenger>();
  private bookingRepo = new GenericRepository<Booking>();

  // Giá vé cơ bản theo loại (VND)
  private DomesticBasePrice = 1_000_000;     // ví dụ
  private InternationalBasePrice = 5_000_000; // ví dụ

  addFlight(flight: Flight): void {
    // FlightNumber duy nhất
    const exist = this.flightRepo.find(f => f.flightNumber === flight.flightNumber);
    if (exist) {
      console.log("Flight number already exists.");
      return;
    }
    this.flightRepo.add(flight);
    console.log("Flight added.");
  }

  addPassenger(name: string, passportNumber: string): Passenger {
    // passportNumber duy nhất
    const exist = this.passengerRepo.find(p => p.passportNumber === passportNumber);
    if (exist) {
      console.log("Passport number already exists, reuse existing passenger.");
      return exist;
    }
    const p = new Passenger(name, passportNumber);
    this.passengerRepo.add(p);
    console.log(`Passenger added. ID = ${p.passengerId}`);
    return p;
  }

  createBooking(
    passengerId: number,
    flightNumber: string,
    numberOfTickets: number,
    baggageWeightPerTicketKg: number
  ): Booking | null {
    const passenger = this.passengerRepo.find(p => p.passengerId === passengerId);
    if (!passenger) {
      console.log("Passenger not found.");
      return null;
    }
    const flight = this.flightRepo.find(f => f.flightNumber === flightNumber);
    if (!flight) {
      console.log("Flight not found.");
      return null;
    }
    if (numberOfTickets <= 0) {
      console.log("Number of tickets must be > 0.");
      return null;
    }
    if (flight.bookedSeats + numberOfTickets > flight.capacity) {
      console.log("Not enough seats available.");
      return null;
    }

    const basePrice =
      flight instanceof DomesticFlight
        ? this.DomesticBasePrice
        : this.InternationalBasePrice;

    const booking = new Booking(
      passenger,
      flight,
      numberOfTickets,
      baggageWeightPerTicketKg,
      basePrice
    );

    // Cập nhật chỗ đã đặt
    flight.bookSeats(numberOfTickets);

    this.bookingRepo.add(booking);
    console.log("Booking created!");
    console.log(booking.getBookingDetails());
    return booking;
  }

  cancelBooking(bookingId: number): void {
    const booking = this.bookingRepo.find(b => b.bookingId === bookingId);
    if (!booking) {
      console.log("Booking not found.");
      return;
    }
    // Trả lại ghế
    booking.flight.releaseSeats(booking.numberOfTickets);
    // Xóa booking
    this.bookingRepo.remove(b => b.bookingId === bookingId);
    console.log("Booking canceled and seats released.");
  }

  listAvailableFlights(origin: string, destination: string): void {
    const flights = this.flightRepo
      .getAll()
      .filter(
        f =>
          f.origin.toLowerCase() === origin.toLowerCase() &&
          f.destination.toLowerCase() === destination.toLowerCase() &&
          !f.isFull()
      );

    if (flights.length === 0) {
      console.log("⚠️ No available flights for the given route.");
      return;
    }

    flights.forEach(f => {
      const type = f instanceof DomesticFlight ? "Domestic" : "International";
      console.log(
        `• ${f.flightNumber} | ${type} | ${f.origin} → ${f.destination} | ` +
          `${formatDate(f.departureTime)} | Seats: ${f.bookedSeats}/${f.capacity}`
      );
    });
  }

  listBookingsByPassenger(passengerId: number): void {
    const bookings = this.bookingRepo.getAll().filter(b => b.passenger.passengerId === passengerId);
    if (bookings.length === 0) {
      console.log("This passenger has no bookings.");
      return;
    }
    bookings.forEach(b => console.log(b.getBookingDetails()));
  }

  calculateTotalRevenue(): number {
    const total = this.bookingRepo.getAll().reduce((sum, b) => sum + b.totalCost, 0);
    console.log(` Total Revenue: ${formatVND(total)}`);
    return total;
  }

  countFlightsByType(): void {
    const counts = this.flightRepo.getAll().reduce(
      (acc, f) => {
        if (f instanceof DomesticFlight) acc.domestic += 1;
        else acc.international += 1;
        return acc;
      },
      { domestic: 0, international: 0 }
    );
    console.log(
      `✈️ Flights count -> Domestic: ${counts.domestic}, International: ${counts.international}`
    );
  }

  updateFlightTime(flightNumber: string, newDepartureTime: Date): void {
    const flight = this.flightRepo.find(f => f.flightNumber === flightNumber);
    if (!flight) {
      console.log("Flight not found.");
      return;
    }
    flight.departureTime = newDepartureTime;
    console.log("Departure time updated.");
  }

  getFlightPassengerList(flightNumber: string): void {
    // Lấy danh sách hành khách đã đặt (filter + map)
    const passengers = this.bookingRepo
      .getAll()
      .filter(b => b.flight.flightNumber === flightNumber)
      .map(b => b.passenger);

    if (passengers.length === 0) {
      console.log("⚠️ No passengers found for this flight.");
      return;
    }

    // Loại trùng (nếu 1 hành khách mua nhiều vé/booking)
    const unique = dedupeBy(passengers, p => p.passengerId);
    unique.forEach(p => console.log(p.getDetails()));
  }

  seedSample(): void {
    // Tạo vài dữ liệu mẫu cho dễ test nhanh
    this.addPassenger("Nguyen Van A", "P123456");
    this.addPassenger("Tran Thi B", "P654321");

    this.addFlight(
      new DomesticFlight("VN101", "Hanoi", "Danang", parseDateTime("2025-09-01 08:30"), 3)
    );
    this.addFlight(
      new InternationalFlight("VN330", "Hanoi", "Tokyo", parseDateTime("2025-09-05 06:45"), 2)
    );
  }
}

/* ===================== Helpers ===================== */

function formatVND(n: number): string {
  return n.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
}

function formatDate(d: Date): string {
  const pad = (x: number) => String(x).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(
    d.getHours()
  )}:${pad(d.getMinutes())}`;
}

function parseDateTime(input: string): Date {
  // Expect "YYYY-MM-DD HH:MM"
  const [datePart, timePart] = input.trim().split(/\s+/);
  const [y, m, d] = datePart.split("-").map(Number);
  const [hh, mm] = timePart.split(":").map(Number);
  return new Date(y, m - 1, d, hh, mm);
}

function dedupeBy<T>(arr: T[], keySelector: (x: T) => string | number): T[] {
  const seen = new Set<string | number>();
  return arr.filter(x => {
    const k = keySelector(x);
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

/* ===================== Menu (Console) ===================== */

const manager = new AirlineManager();
manager.seedSample();

function menu(): void {
  while (true) {
    console.log(`
=========== Airline Management ===========
1. Thêm hành khách mới
2. Thêm chuyến bay mới (Nội địa/Quốc tế)
3. Tạo giao dịch đặt vé
4. Hủy giao dịch đặt vé
5. Hiển thị chuyến bay còn trống theo điểm đi/đến
6. Hiển thị danh sách vé đã đặt của một hành khách
7. Tính tổng doanh thu của hãng
8. Đếm số lượng chuyến bay Nội địa/Quốc tế
9. Cập nhật giờ bay
10. Xem danh sách hành khách của một chuyến bay
11. Thoát
==========================================
`);
    const choice = safeQuestionInt("Chon: ");

    switch (choice) {
      case 1: {
        const name = readlineSync.question("Ten hanh khach: ");
        const passport = readlineSync.question("So ho chieu: ");
        manager.addPassenger(name.trim(), passport.trim());
        break;
      }
      case 2: {
        const t = readlineSync.question("Loại (D=Domestic/Noi dia, I=International/Quoc te): ").toUpperCase();
        const flightNumber = readlineSync.question("So hieu chuyen bay: ").trim();
        const origin = readlineSync.question("Noi di: ").trim();
        const destination = readlineSync.question("Noi den: ").trim();
        const dtStr = readlineSync.question("Gio khoi hanh (YYYY-MM-DD HH:MM): ").trim();
        const cap = safeQuestionInt("Suc chua: ");

        const time = parseDateTime(dtStr);
        if (t === "D") {
          manager.addFlight(new DomesticFlight(flightNumber, origin, destination, time, cap));
        } else if (t === "I") {
          manager.addFlight(new InternationalFlight(flightNumber, origin, destination, time, cap));
        } else {
          console.log("Loai khong hop le.");
        }
        break;
      }
      case 3: {
        const pid = safeQuestionInt("Passenger ID: ");
        const fln = readlineSync.question("Flight Number: ").trim();
        const tickets = safeQuestionInt("So ve: ");
        const baggage = safeQuestionFloat("Hanh ly moi ve (kg): ");
        manager.createBooking(pid, fln, tickets, baggage);
        break;
      }
      case 4: {
        const bid = safeQuestionInt("Booking ID: ");
        manager.cancelBooking(bid);
        break;
      }
      case 5: {
        const o = readlineSync.question("Diem di: ").trim();
        const d = readlineSync.question("Diem den: ").trim();
        manager.listAvailableFlights(o, d);
        break;
      }
      case 6: {
        const pid = safeQuestionInt("Passenger ID: ");
        manager.listBookingsByPassenger(pid);
        break;
      }
      case 7: {
        manager.calculateTotalRevenue();
        break;
      }
      case 8: {
        manager.countFlightsByType();
        break;
      }
      case 9: {
        const fln = readlineSync.question("Flight Number: ").trim();
        const dtStr = readlineSync.question("Gio khoi hanh moi (YYYY-MM-DD HH:MM): ").trim();
        manager.updateFlightTime(fln, parseDateTime(dtStr));
        break;
      }
      case 10: {
        const fln = readlineSync.question("Flight Number: ").trim();
        manager.getFlightPassengerList(fln);
        break;
      }
      case 11: {
        console.log("Exited.");
        process.exit(0);
      }
      default:
        console.log("Choice invalid.");
    }
  }
}

function safeQuestionInt(prompt: string): number {
  while (true) {
    const v = Number(readlineSync.question(prompt));
    if (Number.isInteger(v)) return v;
    console.log("Vui lòng nhập số nguyên.");
  }
}

function safeQuestionFloat(prompt: string): number {
  while (true) {
    const v = Number(readlineSync.question(prompt));
    if (!Number.isNaN(v)) return v;
    console.log("Vui lòng nhập số.");
  }
}

menu();
