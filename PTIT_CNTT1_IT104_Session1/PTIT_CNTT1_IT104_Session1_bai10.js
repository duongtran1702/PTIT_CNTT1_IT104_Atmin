function groupAnagrams(words) {
    const map = {};  // Khởi tạo 1 object rỗng để nhóm các từ có ký tự giống nhau (anagrams)

    words.forEach((word) => {
        // 1. Tách từng ký tự của từ → Sort → Ghép lại → tạo ra key
        const key = word.split('').sort().join('');
        // Ví dụ: "eat" → ['e','a','t'] → ['a','e','t'] → "aet"
        
        // 2. Nếu key đó chưa có trong map, khởi tạo 1 mảng rỗng cho nó
        if (!map[key]) {
            map[key] = [];
        }

        // 3. Thêm từ hiện tại vào mảng của key đó
        map[key].push(word);
    });

    // 4. Trả về danh sách các nhóm (lấy tất cả các value của object map)
    return Object.values(map);
}

const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
const output = groupAnagrams(input);
console.log(output); // In ra các nhóm anagram
