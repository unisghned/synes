/* ==========================================================================
   PANITIA OSIS UI CONTROLLER
   - Horizontal Landscape Card UI (Melebar ke Samping)
   - 37 Total Panitia Anonim
   ========================================================================== */

const panitiaOSISData = [
    // --- PIMPINAN UTAMA (PREZ & VICE) ---
    { id: "PAN-01", nama: "Tantiana Anjanhi", jabatan: "President (Ketua OSIS)", divisi: "Presidium", divisiLabel: "Presidium", isTop: true, badgeBg: "bg-amber-400 text-slate-950 font-black", foto: "assets/panitia/DSC00451.JPG", quote: "Ketos yang keren, pemarah, keibuan, asbun, dan lainnya yang gabisa kebayang" },
    { id: "PAN-02", nama: "Desmond Edmundo", jabatan: "Vice President (Wakil Ketua)", divisi: "Presidium", divisiLabel: "Presidium", isTop: true, badgeBg: "bg-amber-400 text-slate-950 font-black", foto: "assets/panitia/DSC00474.JPG", quote: "waketos sok cool, aneh, weird, gaje, dan banyak negatifnya tapi tetep keren di osis" },

    // --- SECRETARY (2) ---
    { id: "PAN-03", nama: "Chloe Leticia Harmit", jabatan: "Secretary I", divisi: "Secretary", divisiLabel: "Secretary", badgeBg: "bg-blue-500 text-white", foto: "assets/panitia/DSC00436.JPG", quote: "Sekre yang selalu nyatet tiap rapat dan bikin notulensi" },
    { id: "PAN-04", nama: "Karenn Aeleena Nicole", jabatan: "Secretary II", divisi: "Secretary", divisiLabel: "Secretary", badgeBg: "bg-blue-500 text-white", foto: "assets/panitia/DSC00163.JPG", quote: "Sekre yang brisik banget gaketolong, paslon bersama heti" },
 
    // --- TREASURER (2) ---
    { id: "PAN-05", nama: "Verena Kayleen Sung", jabatan: "Treasurer I", divisi: "Treasurer", divisiLabel: "Treasurer", badgeBg: "bg-emerald-500 text-white", foto: "assets/panitia/DSC00321.JPG", quote: "Bendahara si paling misdinar gabriel yg suka marah marah" },
    { id: "PAN-06", nama: "Lovita Bailey Adam", jabatan: "Treasurer II", divisi: "Treasurer", divisiLabel: "Treasurer", badgeBg: "bg-emerald-500 text-white", foto: "assets/panitia/DSC00317.JPG", quote: "Bendahara paling anomali, gajelas, rusuh, kekerasan, dsb" },

    // --- KREAVENTURE (5) ---
    { id: "PAN-07", nama: "Florence Yael Budiman", jabatan: "Coordinator Kreaventure", divisi: "Kreaventure", divisiLabel: "Kreaventure", badgeBg: "bg-pink-500 text-white", foto: "assets/panitia/DSC00443.JPG", quote: "Sosok tinggi kiris yang jago banget di bagian edit post di sosmed" },
    { id: "PAN-08", nama: "Caroline Kezia Budijanto", jabatan: "Kreaventure", divisi: "Kreaventure", divisiLabel: "Kreaventure", badgeBg: "bg-pink-500 text-white", foto: "assets/panitia/DSC00356.JPG", quote: "Pelukis badut muspus pacarnya ray yang kalo marah suka ngejer" },
    { id: "PAN-09", nama: "Joaquin Leandra Constantilova", jabatan: "Kreaventure", divisi: "Kreaventure", divisiLabel: "Kreaventure", badgeBg: "bg-pink-500 text-white", foto: "assets/panitia/DSC00365.JPG", quote: "Sosok seram teater gala 2026" },
    { id: "PAN-10", nama: "Carla Angela Herdiana", jabatan: "Kreaventure", divisi: "Kreaventure", divisiLabel: "Kreaventure", badgeBg: "bg-pink-500 text-white", foto: "assets/panitia/DSC00311.JPG", quote: "SIAP PASKIBRA, SIAP PASBHITA" },
    { id: "PAN-11", nama: "Caroline Ransquella Faustine N", jabatan: "Kreaventure", divisi: "Kreaventure", divisiLabel: "Kreaventure", badgeBg: "bg-pink-500 text-white", foto: "assets/panitia/DSC00372.JPG", quote: "kreaventure teranomali, ketakutan gajelas" },

    // --- VISION VAULT (6) ---
    { id: "PAN-12", nama: "Josefa Maria Davina Hartanto", jabatan: "Coordinator Vision Vault", divisi: "Vision Vault", divisiLabel: "Vision Vault", badgeBg: "bg-purple-600 text-white", foto: "assets/panitia/DSC00280.JPG", quote: "sosok dokum yg selalu ngomel dan asal ngomong" },
    { id: "PAN-13", nama: "Kleon Alfeus Effendi", jabatan: "Vision Vault", divisi: "Vision Vault", divisiLabel: "Vision Vault", badgeBg: "bg-purple-600 text-white", foto: "assets/panitia/DSC00458.JPG", quote: "gw" },
    { id: "PAN-14", nama: "Marvel Chanjaya", jabatan: "Vision Vault", divisi: "Vision Vault", divisiLabel: "Vision Vault", badgeBg: "bg-purple-600 text-white", foto: "assets/panitia/DSC00463.JPG", quote: "sosok teman mulmed yg rangkap jadi apa aja" },
    { id: "PAN-15", nama: "John Magsam", jabatan: "Vision Vault", divisi: "Vision Vault", divisiLabel: "Vision Vault", badgeBg: "bg-purple-600 text-white", foto: "assets/panitia/DSC00305.JPG", quote: "Sosok mulmed perintis dan jago mtl fisika" },
    { id: "PAN-16", nama: "Scharbel Darrien Mulyadı", jabatan: "Vision Vault", divisi: "Vision Vault", divisiLabel: "Vision Vault", badgeBg: "bg-purple-600 text-white", foto: "assets/panitia/DSC00349.JPG", quote: "Sosok tinggi kiris yang kemana mana minta tos wae" },
    { id: "PAN-17", nama: "Denaya Princess Hermawan", jabatan: "Vision Vault", divisi: "Vision Vault", divisiLabel: "Vision Vault", badgeBg: "bg-purple-600 text-white", foto: "assets/panitia/DSC00286.JPG", quote: "Sosok aktor pemain film dan anaknya bu yuni" },

    // --- LINGUAVERSE (4) ---
    { id: "PAN-18", nama: "Maria Christiani Putri", jabatan: "Coordinator Linguaverse", divisi: "Linguaverse", divisiLabel: "Linguaverse", badgeBg: "bg-teal-500 text-slate-950", foto: "assets/panitia/DSC00440.JPG", quote: "SOSOK PALING SUKA MARAH MARAH DAN MUKUL" },
    { id: "PAN-19", nama: "Orva Nathania", jabatan: "Linguaverse", divisi: "Linguaverse", divisiLabel: "Linguaverse", badgeBg: "bg-teal-500 text-slate-950", foto: "assets/panitia/DSC00398.JPG", quote: "sosok alumni trushelle dan sosok tinggi kiris juga" },
    { id: "PAN-20", nama: "Anastasia Aileen Maria H", jabatan: "Linguaverse", divisi: "Linguaverse", divisiLabel: "Linguaverse", badgeBg: "bg-teal-500 text-slate-950", foto: "assets/panitia/DSC00405.JPG", quote: "sosok yang lumayan kalem selama di osis" },
    { id: "PAN-21", nama: "Bernice Celine Kawiharja", jabatan: "Linguaverse", divisi: "Linguaverse", divisiLabel: "Linguaverse", badgeBg: "bg-teal-500 text-slate-950", foto: "assets/panitia/DSC00290.JPG", quote: "salah satu anggota yang aga nyebelin dikit." },

    // --- MASTER MIND (5) ---
    { id: "PAN-22", nama: "Rachel Anabella Widiyanto", jabatan: "Coordinator Master Mind", divisi: "Master Mind", divisiLabel: "Master Mind", badgeBg: "bg-indigo-500 text-white", foto: "assets/panitia/DSC00266.JPG", quote: "Sosok traumatis dengan lagu natal dan teriakannya" },
    { id: "PAN-23", nama: "Devincent Natanael Herdianto", jabatan: "Master Mind", divisi: "Master Mind", divisiLabel: "Master Mind", badgeBg: "bg-indigo-500 text-white", foto: "assets/panitia/DSC00426.JPG", quote:"PSIKOLOG TALENTA MAJU JAYA PACARNYA BAJA" },
    { id: "PAN-24", nama: "Michael Aaron Christopher", jabatan: "Master Mind", divisi: "Master Mind", divisiLabel: "Master Mind", badgeBg: "bg-indigo-500 text-white", foto: "assets/panitia/DSC00469.JPG", quote: "sosok temennya kungfu panda (tukang tidur woi)" },
    { id: "PAN-25", nama: "Raymond Jonathan", jabatan: "Master Mind", divisi: "Master Mind", divisiLabel: "Master Mind", badgeBg: "bg-indigo-500 text-white", foto: "assets/panitia/DSC00430.JPG", quote: "anggota paling rapih dalam berpenampilan fix" },
    { id: "PAN-26", nama: "Calista Westlysia Chang", jabatan: "Master Mind", divisi: "Master Mind", divisiLabel: "Master Mind", badgeBg: "bg-indigo-500 text-white", foto: "assets/panitia/DSC00390.JPG", quote: "ini anggota yg diem diem bae tapi kalem lah" },

    // --- GAME MASTER (5) ---
    { id: "PAN-27", nama: "Francine Vanette Talar", jabatan: "Coordinator Game Master", divisi: "Game Master", divisiLabel: "Game Master", badgeBg: "bg-orange-500 text-white", foto: "assets/panitia/DSC00414.JPG", quote: "Kurang kurangin teriak apalagi pas main game horror." },
    { id: "PAN-28", nama: "Aaronn Alexander Lais", jabatan: "Game Master", divisi: "Game Master", divisiLabel: "Game Master", badgeBg: "bg-orange-500 text-white", foto: "assets/panitia/DSC00296.JPG", quote: "sosok extrovert kelas atas dan orang paling have" },
    { id: "PAN-29", nama: "Bernadetha Louisa Hernawan", jabatan: "Game Master", divisi: "Game Master", divisiLabel: "Game Master", badgeBg: "bg-orange-500 text-white", foto: "assets/panitia/DSC00449.JPG", quote: "sosok paskib yang kalo teriak suka ga kekontrol" },
    { id: "PAN-30", nama: "Kenneth Richie Sabella", jabatan: "Game Master", divisi: "Game Master", divisiLabel: "Game Master", badgeBg: "bg-orange-500 text-white", foto: "assets/panitia/DSC00345.JPG", quote: "SOSOK MITOLOGI MULMED OSTLYMPIC 2026 (waketos hama skrng)" },
    { id: "PAN-31", nama: "Ravel Fulvi Algha Yapiawan", jabatan: "ame Master", divisi: "Game Master", divisiLabel: "Game Master", badgeBg: "bg-orange-500 text-white", foto: "assets/panitia/DSC00482.JPG", quote: "Bassist divergen yang paling ganteng dan ber aura" },

    // --- DIVINE CORE (6) ---
    { id: "PAN-32", nama: "Eugenios Roland Silitonga", jabatan: "Coordinator Divine Core", divisi: "Divine Core", divisiLabel: "Divine Core", badgeBg: "bg-cyan-500 text-slate-950", foto: "assets/panitia/DSC00378.JPG", quote: "Sosok ayah dengan singanggartulo" },
    { id: "PAN-33", nama: "Ray Emmanuel Mulia", jabatan: "Divine Core", divisi: "Divine Core", divisiLabel: "Divine Core", badgeBg: "bg-cyan-500 text-slate-950", foto: "assets/panitia/DSC00270.JPG", quote: "Anggota dengan minus aura terbesar dan hampir nihil sisi positifnya" },
    { id: "PAN-34", nama: "Stephanie Enda Anetta Sitepu", jabatan: "Divine Core", divisi: "Divine Core", divisiLabel: "Divine Core", badgeBg: "bg-cyan-500 text-slate-950", foto: "assets/panitia/DSC00330.JPG", quote: "aduh ini kalo teriak bikin sakit telinga, kalo marah jg ngejar" },
    { id: "PAN-35", nama: "Gwendalyn Yuktipada", jabatan: "Divine Core", divisi: "Divine Core", divisiLabel: "Divine Core", badgeBg: "bg-cyan-500 text-slate-950", foto: "assets/panitia/DSC00360.JPG", quote: "manggil nama orang udah kayak alarm sumpah ga berenti setelah 70x7 kali" },
    { id: "PAN-36", nama: "Nonie Faty Lestari Zega", jabatan: "Divine Core", divisi: "Divine Core", divisiLabel: "Divine Core", badgeBg: "bg-cyan-500 text-slate-950", foto: "assets/panitia/DSC00341.JPG", quote: "sosok yang diem diem bae tapi kalemnya kalem banget buset dah" },
    { id: "PAN-37", nama: "Irene Akwila Manullang", jabatan: "Divine Core", divisi: "Divine Core", divisiLabel: "Divine Core", badgeBg: "bg-cyan-500 text-slate-950", foto: "assets/panitia/DSC00336.JPG", quote: "PACAR DECO TERAKTIF SIALAN, NGEJERNYA GANGOTAK" }
];

// Ganti nilai `message` untuk menulis pesan pribadi tiap kartu.
// Kode dicek berdasarkan ID penerima, bukan berdasarkan kartu yang terakhir dirender.
const personalMessagesById = {
    "PAN-01": { code: "617879", message: "Hai Tanti, atau yang sering gw panggil si kecil. MAKASIH BANYAK YA UDHA JADI KETUA OSIS PERIODE 25/26 YANG KEREN KECE ABIS. maafin gw juga ya selama ini gw kurang banget di osis, jujur nyesek sih tb tb udh abis masa periode. gw sangat amat very proud ke si kecil ini sih, walaupun sakit, ada acara, ada kegiatan lain tapi bisa ngatur semuanya dan luangin waktu buat osis. ga bisa berkata apa apa lagi sih, walau banyak yg bikin kecewa dan lain sebagainya, lu tetep jaga wibawa, perasaan dan profesionalitas lu di osis sebagai ketos (eh mantan ketos deng wkwkwk). Walau emosi gw udah ga ada, tapi dengan berakhirnya masa jabatan kalian, nyesek banget, gw bakal kenang itu selamanya, bahkan jika waktu diulang beribu ribu kalipun gw ga bakal kecewa sama kepemimpinan kalian, dan bakal tetep dukung kalian. eh maap kepanjangan, intinya aja lah ya. makasih ya kecil, mungkin ini first dan last longteks dari gw. Semoga dilain kesempatan lu dapet jadi pemimpin gw lagi ya, gw gamon berat. SEMOGA OSIS PERIODE KEMAREN JADI 7 MINUTES LU YA CIL!" },
    "PAN-02": { code: "284397", message: "Hai Edo atau yang sering gw panggil si dontol kenyal hama gajelas. MAKASIH BANYAK UDAH JADI WAKETOS YANG RANDOM ABIS SUMPAH DAH. jujur, lu keren banget untu selama ini gw bangga banget sama lu yg udh stress, cape dan lain lainnya dikorbanin buat osis. Maafin gw ya kalo gw ada salah sama lu, apalagi perbuatan gw yang selalu bikin lu emosi dan lain lainnya, gw minta maaf dari lubuk hati terdalam. Maafin kalo gw ga layak kalo disuru suru ama lu, kadang nyebelin lah dan sebagianya. singkat banget si kepemimpinan kalian, tapi kalo waktu ini diulang sampe beribu ribu kali pun gw tetep dukung kalian kok. eh maap kepanjangan ku idu, semangat terus ya di taiwan. Semoga di lain kesempatan lu bisa mimpin kita kita lagi. JADIKAN OSIS KEMAREN 7 MINUTES LU YA DO!" },
    "PAN-03": { code: "360292", message: "Hai Chloe atau yg sering gw panggil cole. Makasih ya udah jadi sekre di osis periode 25/26 yang singkat ini. Maafin gw ya kalau selama ini gw ada salah atau suka marah marah sama lu, gw minta maaf dari lubuk hati terdalam. Semoga tetep inget ya sama osis dan jadi kenangan terbaik. Semoga ilmu notulensinya kebawa ampe selama lamanya ya. Thankyou" },
    "PAN-04": { code: "100464", message: "Hai Karenn atau yg sering gw panggil keren ato ketos hama. MAKASIH YAH UDAH JADI SEKRE DI OSIS PERIODE SEBELUMNYA. Semoga dengan udah jadinya ketos, ilmunya makin nambah. jaga osis dengan baik ya, jadikan itu memori dan kenangan terindah kalian di taun terakhir ini. Maaf ya kalo gw selama ini ada salah sama lu, mulai dari kata kata atau perbuatan gw kayak marah marah yg buat tersinggung. gw proud kok sama lu, udh berjuang selama di osis ini. JADIKAN OSIS SEBAGAI 7 MINUTES LU YA!" },
    "PAN-05": { code: "602601", message: "Hai Kayleen atau yg sering gw panggil misdi gabriel. Makasih sudah berdinamika bersama osis di periode kemaren. Terimakasih atas semua kerja kerasnya sebagai bendahara osis yg mantap wow. Maafin gw ya kalo ada salah sama lu atau apapun itu. Semoga OSIS menjadi 7 minutes lu ya!" },
    "PAN-06": { code: "974955", message: "Error with this Message, please contact admin" },
    "PAN-07": { code: "512809", message: "Error with this Message, please contact admin" },
    "PAN-08": { code: "244273", message: "Error with this Message, please contact admin" },
    "PAN-09": { code: "976208", message: "Error with this Message, please contact admin" },
    "PAN-10": { code: "539383", message: "Error with this Message, please contact admin" },
    "PAN-11": { code: "967191", message: "Hai olin atau yg sering gw panggil kerol. Makasih ya udah berdinamika di osis periode 25/26 ini. Sebagai sosok permata kopo 2 yg hobinya takut sama setan dan teriak teriak serta mukul mukul, nanti ke adek adeknya jangan gitu ya. Maafin gw kalo gw ada salah sama lu mulai dari kata kata ataupun perbuakan kayak marah marah dan sebagainya yang buat lu kesel atau bete ama gw. SEMOGA OSIS INI BISA JADI KENANGAN BERHARGA DAN JADI 7 MINUTES LU YA! " },
    "PAN-12": { code: "409054", message: "Hai Vina atau yg sering gw panggil iyup. MAKASIH BANYAK UDH JADI PEMIMPIN VISION VAULT YEA SELAMA PERIODE 25/26. Keren abis si ketua satu ini ngomel nya. Maafin gw ya kalo selama di osis banyak salah sama lu, mulai dari kata kata, marah marah, dan lain lainnya yang buat kesel ato emosi. Maaf gabisa ngomong banyak, ga bisa berkata apa apa lagi euy wkwkwkwk. MAKASII YA ATAS PENGALAMANNYA SELAMA SETAUN ATAU DUATAUN. SEMOGA OSIS JADI 7 MINUTES LU YA!" },
    "PAN-13": { code: "000000", message: "Error with this Message, please contact admin" },
    "PAN-14": { code: "277344", message: "Hai marvel atau yg sering gw panggil mece, kotak, mc, ce, cm, km, dm. Makasih udah jadi mulmed yg pindah pindah job mulu tiap event, sialan emng. Stay kotak, stay mulmed, semoga kutukan mulmed berlanjut dikuliah hukum. maafin kalo gw sengaja banyakin salah ke lu kotak. semoga osis jadi 7 minutes lu ce, jangan dijadiin sarana bolos!" },
    "PAN-15": { code: "559270", message: "Error with this Message, please contact admin" },
    "PAN-16": { code: "210170", message: "Error with this Message, please contact admin" },
    "PAN-17": { code: "485361", message: "Error with this Message, please contact admin" },
    "PAN-18": { code: "358339", message: "Hai putri atau yg sering gw panggil iput, iyup, put. Makasih banyak yaa udah berdinamika di osis selama ini, proud of you karena udah bagi waktu dan beradaptasi secara pesat di sma talenta dan di osis. Maafin gw ya kalo gw ada salah sama lu, mulai dara kata kata gw ataupun perbutan yang bikin lu marah atau kesel sama gw, gw minta maaf sedalam dalamnya. SEMOGA OSIS JADI 7 MINUTES LU YA!" },
    "PAN-19": { code: "534985", message: "Error with this Message, please contact admin" },
    "PAN-20": { code: "118467", message: "Error with this Message, please contact admin" },
    "PAN-21": { code: "632296", message: "Error with this Message, please contact admin" },
    "PAN-22": { code: "804663", message: "Hai Rachel atau yg sering gw panggil akew. Makasih ya udah bekerja keras di osis periode 25/26 ini yang semuanya serba darderdor. Makasih udah jadi pemimpin yg galak, teriak teriak, christmas, dkk di proses perekrutan osis baru. Maafin gw ya kew kalo selama ini gw ada salah sama lu mulai dari kata kata ataupun perbuatan kayak marah marah, ataupun sesuatu yg buat lu kesel ama gw, gw minta maaf. Semoga kedepannya osis bisa jadi 7 minutes lu ya!! " },
    "PAN-23": { code: "776162", message: "Hai Devincent atau yg sering gw panggil cent, depi, dll. Makasih ya udah menjadi psikolog di osis periode 25/26 ini, yang dimana kerjaanya darderdor banget mulai dari ngangkat ngangkat barang, ngomongin si kumis, ngmongin si kumis, ngmongin si ios, ya nganu lah. Gw bangga ama lu dep udah bisa berdinamika di osis yang bner bner random, mana yg mimpin si kecil sama si sama hama lagi. Maafin gw ya kalo selama ini gw ada salah sama lu, mulai dari kata kata atau perbuatan gw yang bikin marah ataupun nganu lah. Semoga osis jadi 7 minutes lu ya dep!" },
    "PAN-24": { code: "939354", message: "Error with this Message, please contact admin" },
    "PAN-25": { code: "142589", message: "Error with this Message, please contact admin" },
    "PAN-26": { code: "653183", message: "Error with this Message, please contact admin" },
    "PAN-27": { code: "769917", message: "Hai Francine atau yg sering gw panggil ecin. Makasih ya cin udah bekerja keras di osis periode 25/26 ini. gw bangga banget kok sama lu udah luangin segala keperluan demi osis, dan seluruh tenaga lu buat osis, jangan kapok kapok di jumpscare ya wkwkwk. Maafin gw ya cin kalo selama ini gw ada salah sama lu, mulai dari kata kata dan perbuatan kayak marah marah, ataupun hal lain yang buat kesel atau emosi. Semoga osis bisa jadi 7 minutes lu ya cin! KURANG KURANGIN NANGIS SAMA TERIAK WOI!!!!!" },
    "PAN-28": { code: "571470", message: "Hai Aaronn atau yg sering gw panggil nengok, ga dong, sering gw panggil arong, ron88, ron. Makasih ya tukang kukis brownies dan tiramisu di periode 25/26 ini. Makasi juga udah selalu ngebantu di osis, jadi orang terandom, teraktif, tergajelas di osis. Maafin gw ron kalo gw banyak salah ama lu (insiden hp diambil sir 1998) mulai dari kata kata atau perbuatna gw selama ini. Semoga osis periode ini jadi kenangan terbaik dan jadi 7 minutes lu nanti ya!" },
    "PAN-29": { code: "637828", message: "Error with this Message, please contact admin" },
    "PAN-30": { code: "982978", message: "Hai kenneth atau yang sering gw panggil heti, ken, neth, keni, kari, telor, mulmed, dkk. Semangat terus ya waketos kesayangan gw, jaga adik adiknya nanti yaa, gw titip osis kesayangan gw ini ke lu ken. Makasi juga udah selalu berjuang di osis periode sebelumnya, maaf gw blm bisa jadi kakak kelas yang baik buat lu ken gw nyesel banget. Maafin gw ya atas segala kesalahan gw yg buat lu kesel atau emosi ke gw. Semoga osis ini bisa jadi kenangan terindah dan jadi 7 minutes lu ya ken!!" },
    "PAN-31": { code: "524731", message: "Hai Algha atau yg sering gw panggil alghuy, ga, al, gha, gha al, dll. TERIMAKASIH SUDA BERJUANG DI OSIS YAAA, APALAGI DI DEBAT KEMARIN LU KEREN BANGET SUMPAH. Makakasii juga yaa udah berjuang di osis selama ini mulai dari duka ataupun suka di osis. Maafin gw ya algha kalo gw selama ini ada salah sama lu mulai dari kata kata atau perbuatan gw kayak marah atau sebagainya ke lu yg bikin kesel. Gw berharap lu bisa rangkul adik adik osis kalian ya. SEMOGA OSIS BISA JADI 7 MINUTES LU YA GHA!!" },
    "PAN-32": { code: "860037", message: "Error with this Message, please contact admin" },
    "PAN-33": { code: "990997", message: "Error with this Message, please contact admin" },
    "PAN-34": { code: "495300", message: "Hai Enda atau yg sering gw panggil nduy, en, da, dkk. Mkasih yaa udah berjuang di osis periode sebelumnya yaitu 25/26. Semangat terus yaa kedepannya, jaga terus adik adiknya, jangan dimarahin ya kalau salah, bersikap lembutlah kepada mereka. Kurang kurangin teriak ya, udh waktunya kalian jadi contoh buat adik adik kelasnya. Sebelum itu, gw mau minta maaf ya, kalo selama ini gw ada salah di perkataan atau berbuatan kayak marah marah ataupun hal lainnya yang buat kesel, takut, atau segan ke gw. Semoga osis bisa selalu jadi kenangan dan jadi 7 minutes lu ya!" },
    "PAN-35": { code: "241409", message: "Error with this Message, please contact admin" },
    "PAN-36": { code: "580867", message: "Error with this Message, please contact admin" },
    "PAN-37": { code: "708726", message: "Hai irene atau yang sering disebut pacar decosigma Makasih ya udah berjuang di osis periode sebelumnya yaitu peritude 25/26. Makasih udah luangin waktu dan tenaganya di osis dan bahkan lanjut di osis periode 26/27. nitip ya jaga adik adiknya, jangan lu pukulin apalagi lu lempar. Maafin gw ya kalo gw ada salah sama lu mulai dari kata kata ataupun perbuatan yang bikin sebel atau marah. Semoga osis bisa jadi 7 minutes lu ya!" }
};

let activeMessageRecipientId = null;
let panitiaModalCloseTimer = null;

/**
 * Render Cards Panitia OSIS
 */
function renderPanitia(filterCategory = 'all') {
    const topContainer = document.getElementById('panitia-top-rack');
    const gridContainer = document.getElementById('panitia-grid-rack');

    if (!gridContainer || !topContainer) return;

    topContainer.innerHTML = '';
    gridContainer.innerHTML = '';

    const lowerFilter = filterCategory.toLowerCase();

    // Data filtering
    const filteredData = filterCategory === 'all' 
        ? panitiaOSISData 
        : panitiaOSISData.filter(item => item.divisi.toLowerCase() === lowerFilter || (lowerFilter === 'presidium' && item.isTop));

    const topLeaders = filteredData.filter(item => item.isTop);
    const standardMembers = filteredData.filter(item => !item.isTop);

    // Render President & Vice (Top Row 2 Cards Side-by-Side Landscape)
    if (topLeaders.length > 0 && (filterCategory === 'all' || lowerFilter === 'presidium')) {
        topContainer.parentElement.classList.remove('hidden');
        topLeaders.forEach(item => {
            topContainer.appendChild(createLeaderHorizontalCard(item));
        });
    } else {
        topContainer.parentElement.classList.add('hidden');
    }

    // Render Standard Divisions (Horizontal Landscape Cards)
    standardMembers.forEach(item => {
        gridContainer.appendChild(createMemberHorizontalCard(item));
    });
}

/**
 * Component: President & Vice President (Horizontal Landscape Card - Glowing Border Emas)
 */
function createLeaderHorizontalCard(item) {
    const card = document.createElement('div');
    card.className = "group relative w-full bg-gradient-to-r from-amber-500/20 via-slate-900/95 to-slate-900 border-2 border-amber-400/80 rounded-2xl p-4 sm:p-5 flex flex-row items-center gap-4 sm:gap-6 shadow-[0_0_30px_rgba(251,191,36,0.2)] hover:shadow-[0_0_40px_rgba(251,191,36,0.4)] hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden";
    card.onclick = () => openPanitiaModal(item);

    card.innerHTML = `
        <!-- Glow Blur Accent -->
        <div class="absolute -right-8 -bottom-8 w-36 h-36 bg-amber-400/10 rounded-full blur-2xl group-hover:bg-amber-400/25 transition-all pointer-events-none"></div>

        <!-- Foto Avatar Landscape Side -->
        <div class="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-xl overflow-hidden border-2 border-amber-400/80 shadow-lg bg-zinc-950">
            <img src="${item.foto}" alt="${item.nama}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        </div>

        <!-- Informasi Detail Horizontal -->
        <div class="flex-1 min-w-0 space-y-1.5">
            <div class="flex items-center justify-between gap-2">
                <span class="text-[9px] sm:text-[10px] font-black uppercase tracking-widest px-3 py-0.5 rounded-full ${item.badgeBg}">
                    ${item.divisiLabel}
                </span>
                <span class="text-[10px] text-amber-300/70 font-mono">${item.id}</span>
            </div>

            <h3 class="text-base sm:text-xl font-extrabold text-white font-display truncate group-hover:text-amber-300 transition-colors">${item.nama}</h3>
            <p class="text-xs sm:text-sm font-bold text-amber-400 uppercase tracking-wider">${item.jabatan}</p>
            <p class="text-[11px] sm:text-xs text-white/80 line-clamp-2 italic font-light pt-1 border-t border-amber-400/20 leading-relaxed">
                "${item.quote}"
            </p>
        </div>
    `;
    return card;
}

/**
 * Component: Anggota Divisi (Horizontal Landscape Card - Melebar Ke Samping)
 */
function createMemberHorizontalCard(item) {
    const card = document.createElement('div');
    card.className = "group relative w-full bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-2xl p-3.5 sm:p-4 flex flex-row items-center gap-4 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-[0_8px_25px_rgba(0,242,254,0.15)] transition-all duration-300 cursor-pointer overflow-hidden";
    card.onclick = () => openPanitiaModal(item);

    card.innerHTML = `
        <!-- Thumbnail Foto di Samping Kiri -->
        <div class="relative w-20 h-20 sm:w-22 sm:h-22 shrink-0 rounded-xl overflow-hidden border border-white/10 bg-zinc-900">
            <img src="${item.foto}" alt="${item.nama}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter brightness-95">
        </div>

        <!-- Detail Profil di Samping Kanan -->
        <div class="flex-1 min-w-0 space-y-1">
            <div class="flex items-center justify-between">
                <span class="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${item.badgeBg}">
                    ${item.divisiLabel}
                </span>
                <span class="text-[9px] text-white/30 font-mono">${item.id}</span>
            </div>

            <h4 class="text-sm sm:text-base font-bold text-white font-display group-hover:text-cyan-400 transition-colors truncate">${item.nama}</h4>
            <p class="text-[11px] sm:text-xs text-cyan-300/90 font-semibold truncate">${item.jabatan}</p>
            <p class="text-[10px] sm:text-[11px] text-white/60 line-clamp-1 font-light italic border-t border-white/5 pt-1">
                "${item.quote}"
            </p>
        </div>
    `;
    return card;
}

/**
 * Filter Controller
 */
function filterPanitia(category, btnElement) {
    const buttons = btnElement.parentElement.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.className = "px-4 py-2 rounded-full bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white transition-all duration-300 text-[10px] uppercase font-bold tracking-wider";
    });

    btnElement.className = "px-4 py-2 rounded-full bg-cyan-500 text-slate-950 border border-cyan-400 font-bold shadow-lg shadow-cyan-500/20 transition-all duration-300 text-[10px] uppercase tracking-wider";

    renderPanitia(category);
}

/**
 * Lightbox Modal Preview
 */
function openPanitiaModal(item) {
    const modal = document.getElementById('panitia-lightbox');
    const modalBox = modal.querySelector('div');

    clearTimeout(panitiaModalCloseTimer);
    activeMessageRecipientId = item.id;
    resetPersonalMessage();
    document.getElementById('panitia-img').src = item.foto;
    document.getElementById('panitia-badge').innerText = item.divisiLabel;
    document.getElementById('panitia-badge').className = `absolute top-3 left-3 text-white text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md shadow-md ${item.badgeBg}`;
    document.getElementById('panitia-nama').innerText = item.nama;
    document.getElementById('panitia-jabatan').innerText = item.jabatan;
    document.getElementById('panitia-desc').innerText = `"${item.quote}"`;

    modal.classList.remove('hidden');
    setTimeout(() => {
        modalBox.classList.remove('scale-95', 'opacity-0');
        modalBox.classList.add('scale-100', 'opacity-100');
    }, 10);
}

function closePanitiaModal() {
    const modal = document.getElementById('panitia-lightbox');
    const modalBox = modal.querySelector('div');

    resetPersonalMessage();
    activeMessageRecipientId = null;
    modalBox.classList.remove('scale-100', 'opacity-100');
    modalBox.classList.add('scale-95', 'opacity-0');
    clearTimeout(panitiaModalCloseTimer);
    panitiaModalCloseTimer = setTimeout(() => {
        modal.classList.add('hidden');
    }, 200);
}

function showPersonalMessageForm() {
    const form = document.getElementById('personal-message-form');
    const input = document.getElementById('personal-message-code');
    const button = document.getElementById('show-personal-message');

    if (!form || !input || !button || !activeMessageRecipientId) return;
    button.classList.add('hidden');
    form.classList.remove('hidden');
    input.focus();
}

function unlockPersonalMessage(event) {
    event.preventDefault();

    const entry = personalMessagesById[activeMessageRecipientId];
    const input = document.getElementById('personal-message-code');
    const error = document.getElementById('personal-message-error');
    const popup = document.getElementById('personal-message-modal');
    const popupRecipient = document.getElementById('personal-message-recipient');
    const message = document.getElementById('personal-message-text');
    const form = document.getElementById('personal-message-form');
    const recipient = panitiaOSISData.find((person) => person.id === activeMessageRecipientId);

    if (!entry || !input || !error || !popup || !popupRecipient || !message || !form || !recipient) return;

    if (!/^\d{6}$/.test(input.value) || input.value !== entry.code) {
        error.textContent = 'Kode belum cocok untuk kartu ini. Coba periksa lagi, ya.';
        input.setAttribute('aria-invalid', 'true');
        input.focus();
        return;
    }

    error.textContent = '';
    input.removeAttribute('aria-invalid');
    message.textContent = entry.message || 'Pesan untukmu sedang disiapkan.';
    popupRecipient.textContent = `UNTUK ${recipient.nama}`;
    form.classList.add('hidden');
    popup.classList.remove('hidden');
    popup.querySelector('button').focus();
}

function closePersonalMessagePopup() {
    const popup = document.getElementById('personal-message-modal');
    if (!popup || popup.classList.contains('hidden')) return;

    popup.classList.add('hidden');
    resetPersonalMessage();
    document.getElementById('show-personal-message')?.focus();
}

function resetPersonalMessage() {
    const button = document.getElementById('show-personal-message');
    const form = document.getElementById('personal-message-form');
    const input = document.getElementById('personal-message-code');
    const error = document.getElementById('personal-message-error');
    const popup = document.getElementById('personal-message-modal');
    const message = document.getElementById('personal-message-text');
    const recipient = document.getElementById('personal-message-recipient');

    if (button) button.classList.remove('hidden');
    if (form) form.classList.add('hidden');
    if (input) {
        input.value = '';
        input.removeAttribute('aria-invalid');
    }
    if (error) error.textContent = '';
    if (popup) popup.classList.add('hidden');
    if (message) message.textContent = '';
    if (recipient) recipient.textContent = '';
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closePersonalMessagePopup();
});

// Global Exports
window.renderPanitia = renderPanitia;
window.filterPanitia = filterPanitia;
window.openPanitiaModal = openPanitiaModal;
window.closePanitiaModal = closePanitiaModal;
window.showPersonalMessageForm = showPersonalMessageForm;
window.unlockPersonalMessage = unlockPersonalMessage;
window.closePersonalMessagePopup = closePersonalMessagePopup;
