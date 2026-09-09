// Dữ liệu giả (mock data) — sau này thay bằng API backend thật
const SPECIALTIES = [
  "Nội khoa",
  "Nhi khoa",
  "Da liễu",
  "Tim mạch",
  "Tai Mũi Họng",
  "Mắt"
];

const DOCTORS = [
  // Nội khoa
  { id: "d1",  name: "BS. Nguyễn Văn An",   specialty: "Nội khoa",     initials: "AN", years: 12, note: "Khám tổng quát, bệnh mãn tính" },
  { id: "d1b", name: "BS. Đặng Thị Mai",    specialty: "Nội khoa",     initials: "ĐM", years: 7,  note: "Nội tiết, tiểu đường" },
  { id: "d1c", name: "BS. Trịnh Văn Sơn",   specialty: "Nội khoa",     initials: "TS", years: 16, note: "Tiêu hóa, gan mật" },
  // Nhi khoa
  { id: "d2",  name: "BS. Trần Thị Bình",   specialty: "Nhi khoa",     initials: "TB", years: 8,  note: "Khám nhi, tiêm chủng" },
  { id: "d2b", name: "BS. Nguyễn Hoàng Nam",specialty: "Nhi khoa",     initials: "HN", years: 6,  note: "Nhi sơ sinh" },
  { id: "d2c", name: "BS. Lý Thị Hương",    specialty: "Nhi khoa",     initials: "LH", years: 13, note: "Dinh dưỡng trẻ em" },
  // Da liễu
  { id: "d3",  name: "BS. Lê Minh Cường",   specialty: "Da liễu",      initials: "MC", years: 10, note: "Da, dị ứng, thẩm mỹ da" },
  { id: "d3b", name: "BS. Phan Thị Ngọc",   specialty: "Da liễu",      initials: "PN", years: 9,  note: "Da liễu thẩm mỹ" },
  { id: "d3c", name: "BS. Đỗ Văn Tùng",     specialty: "Da liễu",      initials: "ĐT", years: 14, note: "Điều trị mụn, sẹo" },
  // Tim mạch
  { id: "d4",  name: "BS. Phạm Thu Hà",     specialty: "Tim mạch",     initials: "TH", years: 15, note: "Tim mạch, huyết áp" },
  { id: "d4b", name: "BS. Vũ Đình Long",    specialty: "Tim mạch",     initials: "ĐL", years: 11, note: "Loạn nhịp tim" },
  { id: "d4c", name: "BS. Bùi Thị Thanh",   specialty: "Tim mạch",     initials: "BT", years: 18, note: "Suy tim, mạch vành" },
  // Tai Mũi Họng
  { id: "d5",  name: "BS. Hoàng Văn Đức",   specialty: "Tai Mũi Họng", initials: "VĐ", years: 9,  note: "Tai mũi họng tổng quát" },
  { id: "d5b", name: "BS. Ngô Thị Yến",     specialty: "Tai Mũi Họng", initials: "NY", years: 5,  note: "Viêm xoang, viêm họng" },
  { id: "d5c", name: "BS. Trần Văn Phúc",   specialty: "Tai Mũi Họng", initials: "TP", years: 12, note: "Nội soi tai mũi họng" },
  // Mắt
  { id: "d6",  name: "BS. Vũ Thị Lan",      specialty: "Mắt",          initials: "TL", years: 11, note: "Khám và đo mắt" },
  { id: "d6b", name: "BS. Đinh Văn Hiếu",   specialty: "Mắt",          initials: "ĐH", years: 8,  note: "Phẫu thuật khúc xạ" },
  { id: "d6c", name: "BS. Lâm Thị Kim",     specialty: "Mắt",          initials: "LK", years: 15, note: "Đục thủy tinh thể" }
];

// Ảnh nền cho từng phòng ban ở trang departments.html (theo đúng thứ tự SPECIALTIES)
const DEPT_IMAGES = [
  "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=70", // Nội khoa - ống nghe
  "https://images.unsplash.com/photo-1632052999447-e542d08d4f7d?auto=format&fit=crop&w=900&q=70", // Nhi khoa - khám trẻ em
  "https://images.unsplash.com/photo-1676312754401-d97fe43c2c4b?auto=format&fit=crop&w=900&q=70", // Da liễu - kính lúp soi da
  "https://images.unsplash.com/photo-1618939304347-e91b1f33d2ab?auto=format&fit=crop&w=900&q=70", // Tim mạch - mô hình tim
  "https://images.unsplash.com/photo-1764727291644-5dcb0b1a0375?auto=format&fit=crop&w=900&q=70", // Tai Mũi Họng - phòng khám
  "https://images.unsplash.com/photo-1539036776273-021ec1d78bec?auto=format&fit=crop&w=900&q=70"  // Mắt - máy đo mắt
];

// Nội dung chi tiết cho trang mô tả từng phòng ban
const DEPT_INFO = {
  "Nội khoa": {
    subtitle: "Điều trị các bệnh thông thường và chăm sóc sức khỏe tổng quát",
    intro: "Khoa Nội tổng quát của chúng tôi cung cấp dịch vụ chăm sóc toàn diện cho các vấn đề sức khỏe thường gặp hàng ngày, bao gồm sốt, nhiễm trùng và các bệnh mãn tính. Chúng tôi tập trung vào chẩn đoán sớm và chăm sóc sức khỏe dự phòng.",
    services: ["Điều trị sốt và nhiễm trùng", "Quản lý huyết áp", "Theo dõi bệnh tiểu đường", "Khám sức khỏe định kỳ"],
    doctorNote: "Chúng tôi đảm bảo chẩn đoán chính xác và điều trị cá nhân hóa để duy trì sức khỏe tổng thể của bạn."
  },
  "Nhi khoa": {
    subtitle: "Chăm sóc sức khỏe toàn diện cho trẻ sơ sinh, trẻ nhỏ và thanh thiếu niên",
    intro: "Khoa Nhi của chúng tôi đồng hành cùng ba mẹ trong suốt quá trình phát triển của trẻ, từ những ngày đầu sơ sinh đến tuổi vị thành niên, với môi trường khám thân thiện và nhẹ nhàng.",
    services: ["Tiêm chủng theo lịch", "Theo dõi tăng trưởng và dinh dưỡng", "Khám khi sốt, ho, cảm cúm", "Tư vấn sức khỏe trẻ sơ sinh"],
    doctorNote: "Mỗi trẻ là một cá thể riêng biệt — chúng tôi lắng nghe phụ huynh và đồng hành cùng sự phát triển của bé."
  },
  "Da liễu": {
    subtitle: "Chẩn đoán và điều trị các vấn đề về da, tóc và móng",
    intro: "Khoa Da liễu cung cấp dịch vụ khám và điều trị các bệnh lý da liễu phổ biến lẫn chuyên sâu, kết hợp giữa y học và thẩm mỹ da để mang lại làn da khỏe mạnh.",
    services: ["Điều trị mụn và sẹo", "Khám dị ứng da", "Soi da chẩn đoán", "Tư vấn chăm sóc da thẩm mỹ"],
    doctorNote: "Làn da khỏe mạnh bắt đầu từ chẩn đoán đúng — chúng tôi luôn giải thích rõ nguyên nhân trước khi điều trị."
  },
  "Tim mạch": {
    subtitle: "Khám và điều trị các bệnh lý tim mạch, huyết áp",
    intro: "Khoa Tim mạch tập trung vào phát hiện sớm và quản lý lâu dài các bệnh lý tim mạch, giúp bệnh nhân kiểm soát tốt tình trạng sức khỏe và phòng ngừa biến chứng.",
    services: ["Đo điện tâm đồ (ECG)", "Theo dõi huyết áp", "Tầm soát bệnh mạch vành", "Tư vấn lối sống cho người bệnh tim"],
    doctorNote: "Bệnh tim mạch có thể kiểm soát tốt nếu được phát hiện sớm — đừng ngần ngại thăm khám định kỳ."
  },
  "Tai Mũi Họng": {
    subtitle: "Chẩn đoán và điều trị các bệnh lý tai, mũi và họng",
    intro: "Khoa Tai Mũi Họng khám và điều trị các vấn đề thường gặp như viêm họng, viêm xoang, ù tai, cùng các bệnh lý chuyên sâu hơn với trang thiết bị nội soi hiện đại.",
    services: ["Nội soi tai mũi họng", "Điều trị viêm xoang", "Khám ù tai, giảm thính lực", "Điều trị viêm họng mãn tính"],
    doctorNote: "Nhiều vấn đề tai mũi họng có thể điều trị dứt điểm nếu thăm khám kịp thời, đừng để bệnh kéo dài."
  },
  "Mắt": {
    subtitle: "Khám, đo và điều trị các vấn đề về thị lực",
    intro: "Khoa Mắt cung cấp dịch vụ khám mắt toàn diện, từ đo thị lực cơ bản đến tầm soát các bệnh lý mắt phức tạp, giúp bảo vệ đôi mắt của bạn ở mọi lứa tuổi.",
    services: ["Đo thị lực, cắt kính", "Tầm soát đục thủy tinh thể", "Khám khô mắt, viêm kết mạc", "Tư vấn phẫu thuật khúc xạ"],
    doctorNote: "Đôi mắt cần được kiểm tra định kỳ dù không có triệu chứng — phát hiện sớm giúp bảo tồn thị lực tốt hơn."
  }
};


const TIME_SLOTS = ["08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00"];

// ---------- Trợ giúp làm việc với localStorage ----------
function getAppointments() {
  return JSON.parse(localStorage.getItem("appointments") || "[]");
}

function saveAppointments(list) {
  localStorage.setItem("appointments", JSON.stringify(list));
}

function getTakenSlots(doctorId, date) {
  return getAppointments()
    .filter(a => a.doctorId === doctorId && a.date === date && a.status !== "cancelled")
    .map(a => a.time);
}