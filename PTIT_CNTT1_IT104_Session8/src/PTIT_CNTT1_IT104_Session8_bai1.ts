enum weekDays {
    MONDAY = 'Monday',
    TUESDAY = 'tuesday',
    WEDNESDAY = 'wednesday',
    THURSDAY = 'thursday',
    FRIDAY = 'friday',
    SATURDAY = 'saturday',
    SUNDAY = 'sunday',
}
Object.values(weekDays).forEach((e) =>
    console.log(e.charAt(0).toUpperCase() + e.slice(1))
);
