// ===== COURSE DB =====
// MU course categories
const CAT_LABELS={isci:"I-Sci",mu_req:"บังคับ MU",elective:"เลือก",dna_h:"DNA-H",dna_s:"DNA-S",seminar:"สัมมนา",project:"Project/Capstone",tu:"TU"};
const CAT_COLORS={isci:"#6889AD",mu_req:"#2B5B8A",elective:"#94A7C2",dna_h:"#E8881F",dna_s:"#F5A623",seminar:"#8E6BA1",project:"#1E8449",tu:"#E8881F"};

/*__DB_START__*/const DB={"muge":{"n":"การศึกษาทั่วไปเพื่อการพัฒนามนุษย์","c":"มมศท ๑๐๐ / MUGE 100","cr":"3","l":"MU","cat":"mu_req","th":"การศึกษาทั่วไปเพื่อการพัฒนามนุษย์","en":"General Education for Human Development","prof":"","email":"","mod":""},"eng":{"n":"ภาษาอังกฤษ","c":"English","cr":"2","l":"MU","cat":"mu_req","th":"ภาษาอังกฤษตามระดับที่กำหนด","en":"English by placement","prof":"","email":"","mod":""},"thai":{"n":"ภาษาไทยเพื่อการสื่อสาร","c":"ศศลท ๑๑๑ / LATP 111","cr":"2","l":"MU","cat":"mu_req","th":"ภาษาไทยเพื่อการสื่อสารในระดับอุดมศึกษา","en":"Thai for Communication in H.E.","prof":"","email":"","mod":""},"lit":{"n":"5 Literacies","c":"MU Literacy","cr":"2","l":"MU","cat":"mu_req","th":"ทักษะรู้ 5 ด้าน","en":"5 Literacies","prof":"","email":"","mod":""},"ib":{"n":"ชีววิทยาปัญญาบูรณาการ","c":"วทยย ๑๐๑ / SCSS 101","cr":"3","l":"MU","cat":"isci","th":"โครงสร้างและหน้าที่ของเซลล์พืชและเซลล์สัตว์ ออร์แกเนลล์สำคัญ ไมโทซิสและไมโอซิส เนื้อเยื่อพืชและเนื้อเยื่อสัตว์ ชีวโมเลกุลสี่ประเภทหลัก การสังเคราะห์ด้วยแสง การหายใจระดับเซลล์ เอนไซม์และเมแทบอลิซึม พันธุศาสตร์เมนเดล โครงสร้างดีเอ็นเอ การจำลองดีเอ็นเอ กลไกกลางจากดีเอ็นเอสู่อาร์เอ็นเอสู่โปรตีน การควบคุมการแสดงออกของยีน เอพิเจเนติกส์ ระบบอวัยวะของสัตว์ จุลชีววิทยาเบื้องต้น ความสัมพันธ์แบบพึ่งพาอาศัย นิเวศวิทยาประชากรและการเติบโตแบบลอจิสติก วัฏจักรชีวเคมี ความหลากหลายทางชีวภาพ อนุกรมวิธาน วิวัฒนาการโดยการคัดเลือกตามธรรมชาติ เซลล์ต้นกำเนิด การส่งสัญญาณของเซลล์ วิธีการทางวิทยาศาสตร์สำหรับการออกแบบการทดลองทางชีววิทยา การจัดการเรียนรู้แบบบูรณาการผ่านสถานการณ์จริง ๔ ธีม ได้แก่ ระบบนิเวศป่าชายเลน โรงเรือนพลังงานแสงอาทิตย์ แนวปะการัง และเมืองอัจฉริยะ","en":"Cell structure and function in plant and animal cells; major organelles; mitosis and meiosis; plant and animal tissues; four major types of biomolecules; photosynthesis; cellular respiration; enzymes and metabolism; Mendelian genetics and inheritance; DNA structure; DNA replication; central dogma from DNA to RNA to protein; gene regulation; epigenetics; animal organ systems; introductory microbiology; symbiotic relationships; population ecology and logistic growth; biogeochemical cycles; biodiversity; taxonomy; evolution by natural selection; stem cells; cell signalling; scientific method for biological experimental design; issues-based integrated learning through four real-world themes: mangrove ecosystem, solar-powered greenhouse, coral reef, and smart city","prof":"","email":"","mod":""},"im":{"n":"คณิตศาสตร์ปัญญาบูรณาการ","c":"วทยย ๑๐๒ / SCSS 102","cr":"3","l":"MU","cat":"isci","th":"ฟังก์ชัน โดเมน เรนจ์ กราฟของฟังก์ชัน ฟังก์ชันตรีโกณมิติ เอกซ์โพเนนเชียล ลอการิทึม พีชคณิตพหุนาม แคลคูลัสเชิงอนุพันธ์ การประยุกต์หาค่าสูงสุดต่ำสุด แคลคูลัสเชิงปริพันธ์ สมการเชิงอนุพันธ์สามัญอันดับหนึ่ง แบบจำลองการเติบโตแบบลอจิสติก พีชคณิตเชิงเส้น เมทริกซ์ ค่าเจาะจงและเวกเตอร์เจาะจง อนุพันธ์ย่อย เวกเตอร์เกรเดียนต์ ปริพันธ์หลายชั้น วิธีเชิงตัวเลขของออยเลอร์ ความน่าจะเป็นและสถิติ อนุกรมเทย์เลอร์ การวิเคราะห์ฟูเรียร์เบื้องต้น การแปลงลาปลาซ ความซับซ้อนเชิงเวลาของขั้นตอนวิธี การจัดการเรียนรู้แบบบูรณาการผ่านสถานการณ์จริง ๔ ธีมร่วมกับชีววิทยา ฟิสิกส์ และเคมี","en":"Functions; domain; range; graphs of functions; trigonometric functions; exponential and logarithmic functions; polynomial algebra; differential calculus; optimisation applications; integral calculus; first-order ordinary differential equations; logistic growth models; linear algebra; matrices; eigenvalues and eigenvectors; partial derivatives; gradient vectors; multiple integrals; Euler's numerical method; probability and statistics; Taylor series; introductory Fourier analysis; Laplace transforms; algorithm time complexity; issues-based integrated learning through four real-world themes in conjunction with biology, physics, and chemistry","prof":"","email":"","mod":""},"ip":{"n":"ฟิสิกส์ปัญญาบูรณาการ","c":"วทยย ๑๐๓ / SCSS 103","cr":"3","l":"MU","cat":"isci","th":"จลนศาสตร์ การเคลื่อนที่แนวตรง กฎการเคลื่อนที่ของนิวตัน แรงเสียดทาน แผนภาพวัตถุอิสระ งาน พลังงาน กฎอนุรักษ์พลังงาน โมเมนตัมและการดล การเคลื่อนที่แบบหมุน การเคลื่อนที่แบบฮาร์มอนิกอย่างง่าย คลื่นและเสียง กลศาสตร์ของไหล สมการแบร์นูลลี แรงลอยตัว การถ่ายโอนความร้อน อุณหพลศาสตร์ ประสิทธิภาพคาร์โนต์ วงจรไฟฟ้ากระแสตรง กฎของโอห์ม แม่เหล็กไฟฟ้า กฎของฟาราเดย์ คลื่นแม่เหล็กไฟฟ้า พลังงานโฟตอน ทัศนศาสตร์เลนส์บาง การจัดการเรียนรู้แบบบูรณาการผ่านสถานการณ์จริง ๔ ธีม ได้แก่ ระบบนิเวศป่าชายเลน โรงเรือนพลังงานแสงอาทิตย์ แนวปะการัง และเมืองอัจฉริยะ","en":"Kinematics; one-dimensional motion; Newton's laws of motion; friction; free body diagrams; work; energy; conservation of energy; momentum and impulse; rotational motion; simple harmonic motion; waves and sound; fluid mechanics; Bernoulli's equation; buoyancy; heat transfer; thermodynamics; Carnot efficiency; direct current circuits; Ohm's law; electromagnetism; Faraday's law; electromagnetic waves; photon energy; thin lens optics; issues-based integrated learning through four real-world themes: mangrove ecosystem, solar-powered greenhouse, coral reef, and smart city","prof":"ผศ. ขวัญ อารยะธนิตกุล","email":"","mod":""},"ic":{"n":"เคมีปัญญาบูรณาการ","c":"วทยย ๑๐๔ / SCSS 104","cr":"3","l":"MU","cat":"isci","th":"โครงสร้างอะตอม การจัดเรียงอิเล็กตรอน แนวโน้มตารางธาตุ พันธะเคมี โครงสร้างลิวอิส ทฤษฎี VSEPR ไฮบริไดเซชัน สมการเคมี สโตอิชิโอเมทรี กฎของแก๊สอุดมคติ เทอร์โมเคมี กฎของเฮสส์ จลนศาสตร์เคมี กฎอัตราการเกิดปฏิกิริยา สมดุลเคมี หลักของเลอชาเตอลิเอ เคมีกรด-เบส บัฟเฟอร์ ปฏิกิริยารีดอกซ์ เซลล์กัลวานิก เคมีอินทรีย์เบื้องต้น หมู่ฟังก์ชัน สเปกโทรสโกปี เคมีนิวเคลียร์ การจัดการเรียนรู้แบบบูรณาการผ่านสถานการณ์จริง ๔ ธีม ได้แก่ ระบบนิเวศป่าชายเลน โรงเรือนพลังงานแสงอาทิตย์ แนวปะการัง และเมืองอัจฉริยะ","en":"Atomic structure; electron configuration; periodic trends; chemical bonding; Lewis structures; VSEPR theory; hybridisation; chemical equations; stoichiometry; ideal gas law; thermochemistry; Hess's law; chemical kinetics; rate laws; chemical equilibrium; Le Chatelier's principle; acid-base chemistry; buffers; redox reactions; galvanic cells; introductory organic chemistry; functional groups; spectroscopy; nuclear chemistry; issues-based integrated learning through four real-world themes: mangrove ecosystem, solar-powered greenhouse, coral reef, and smart city","prof":"รศ. ทวีชัย อมรศักดิ์ชัย","email":"","mod":""},"blb":{"n":"ปฏิบัติการชีววิทยาปัญญาบูรณาการ","c":"วทยย ๑๐๕ / SCSS 105","cr":"1","l":"MU","cat":"isci","th":"กล้องจุลทรรศน์และการสังเกตเซลล์ การย้อมสีเนื้อเยื่อ การทดสอบสารชีวโมเลกุลในอาหาร การสกัดดีเอ็นเอ การวัดอัตราการสังเคราะห์ด้วยแสง การวัดอัตราการหายใจระดับเซลล์ ผลของอุณหภูมิและค่าพีเอชต่อเอนไซม์ พันธุศาสตร์เมนเดลแบบจำลอง การสำรวจความหลากหลายทางชีวภาพภาคสนาม อนุกรมวิธานและการจำแนกสิ่งมีชีวิต การสังเกตพัฒนาการตัวอ่อน การจำลองระบบนิเวศ","en":"Microscopy and cell observation; tissue staining; biomolecule testing in food; DNA extraction; photosynthesis rate measurement; cellular respiration rate measurement; effects of temperature and pH on enzymes; Mendelian genetics simulation; field biodiversity survey; taxonomy and organism classification; embryo development observation; ecosystem simulation","prof":"","email":"","mod":""},"mlb":{"n":"ปฏิบัติการคณิตศาสตร์ปัญญาบูรณาการ","c":"วทยย ๑๐๖ / SCSS 106","cr":"1","l":"MU","cat":"isci","th":"แบบจำลองทางคณิตศาสตร์จากข้อมูลจริง การเขียนโปรแกรมเบื้องต้นด้วยภาษาไพทอน การแก้ระบบสมการด้วยซอฟต์แวร์ การจำลองสมการเชิงอนุพันธ์เชิงตัวเลข การวิเคราะห์ข้อมูลเชิงสถิติ การสร้างกราฟแสดงผลข้อมูล วิธีออยเลอร์ประยุกต์ การวิเคราะห์สัญญาณด้วยวิธีฟูเรียร์","en":"Mathematical modelling from real data; introductory Python programming; solving systems of equations using software; numerical differential equation simulation; statistical data analysis; data visualisation; applied Euler's method; Fourier signal analysis","prof":"","email":"","mod":""},"plb":{"n":"ปฏิบัติการฟิสิกส์ปัญญาบูรณาการ","c":"วทยย ๑๐๗ / SCSS 107","cr":"1","l":"MU","cat":"isci","th":"การวัดการเคลื่อนที่และความเร่งด้วยเซนเซอร์ กฎของนิวตันและเครื่อง Atwood กฎอนุรักษ์พลังงาน คาบการแกว่งของลูกตุ้ม คลื่นและเสียง กลศาสตร์ของไหลและสมการแบร์นูลลี ความจุความร้อนจำเพาะด้วยแคลอริมิเตอร์ วงจรไฟฟ้ากระแสตรง แม่เหล็กไฟฟ้าและการเหนี่ยวนำ ทัศนศาสตร์เลนส์","en":"Motion and acceleration measurement using sensors; Newton's law and Atwood's machine; energy conservation; pendulum period; waves and sound; fluid mechanics and Bernoulli's equation; specific heat capacity using calorimetry; direct current circuits; electromagnetism and electromagnetic induction; lens optics","prof":"","email":"","mod":""},"clb":{"n":"ปฏิบัติการเคมีปัญญาบูรณาการ","c":"วทยย ๑๐๘ / SCSS 108","cr":"1","l":"MU","cat":"isci","th":"ทดสอบเปลวไฟและสเปกตรัมการปล่อย แบบจำลองโมเลกุลสามมิติ สโตอิชิโอเมทรี สมบัติของสารประกอบชนิดต่างๆ กฎของแก๊ส เอนทาลปีของปฏิกิริยาด้วยแคลอริมิเตอร์ กฎของเฮสส์ อัตราการเกิดปฏิกิริยาเคมี สมดุลเคมี ไทเทรตกรด-เบส ปฏิกิริยารีดอกซ์และแบตเตอรี่อย่างง่าย หมู่ฟังก์ชันในสารอินทรีย์ สเปกโทรโฟโตมิเตอร์","en":"Flame test and emission spectra; three-dimensional molecular models; stoichiometry; properties of various compounds; gas laws; reaction enthalpy using calorimetry; Hess's law; chemical reaction rate measurement; chemical equilibrium; acid-base titration; redox reactions and simple battery construction; functional groups in organic compounds; spectrophotometry","prof":"","email":"","mod":""},"s201":{"n":"การคิดเชิงวิทยาศาสตร์","c":"วทยย ๓๐๑ / SCSS 301","cr":"2","l":"MU","cat":"dna_s","th":"กระบวนการคิดเชิงระบบสำหรับปัญหาที่ซับซ้อน การคิดเชิงวิพากษ์และการประเมินข้อมูลอย่างมีวิจารณญาณ การตั้งสมมติฐานและการทดสอบสมมติฐาน การรู้เท่าทันข้อมูลและการแยกแยะข้อเท็จจริงจากความคิดเห็น การตีความหลักฐานทางวิทยาศาสตร์ อคติทางความคิดและผลกระทบต่อการตัดสินใจ จริยธรรมในการวิจัย การสื่อสารทางวิทยาศาสตร์ต่อสาธารณะ และการประยุกต์ใช้วิธีการทางวิทยาศาสตร์ในการวิเคราะห์ปัญหาความยั่งยืน","en":"Systems thinking for complex problems; critical thinking and evidence evaluation; hypothesis formulation and testing; data literacy and distinguishing facts from opinions; interpretation of scientific evidence; cognitive biases and their impact on decision making; research ethics; science communication to the public; application of scientific methods to sustainability problem analysis","prof":"","email":"","mod":""},"s202":{"n":"การออกแบบการทดลอง","c":"วทยย ๓๐๒ / SCSS 302","cr":"2","l":"MU","cat":"dna_s","th":"หลักการกำหนดปัญหาวิจัยและตั้งสมมติฐาน การเลือกตัวแปรต้น ตัวแปรตาม และตัวแปรควบคุม การออกแบบกลุ่มทดลองและกลุ่มควบคุม การกำหนดขนาดตัวอย่างและการสุ่มตัวอย่าง รูปแบบการทดลองแบบสุ่มสมบูรณ์ การทดลองแบบบล็อก และการทดลองแฟกทอเรียล การวิเคราะห์ความแปรปรวนเบื้องต้น การทดสอบสมมติฐานเชิงสถิติ การนำเสนอผลการทดลองในรูปแบบรายงานวิจัย และการทำซ้ำได้ของผลการทดลองทางวิทยาศาสตร์","en":"Principles of research problem identification and hypothesis formulation; selection of independent, dependent, and control variables; experimental and control group design; sample size determination and sampling methods; completely randomised, block, and factorial experimental designs; introductory analysis of variance; statistical hypothesis testing; presentation of experimental results in research report format; reproducibility in scientific experiments","prof":"","email":"","mod":""},"s203":{"n":"คณิตศาสตร์สำหรับกระบวนการทางวิทยาศาสตร์","c":"วทยย ๓๐๓ / SCSS 303","cr":"3","l":"MU","cat":"dna_s","th":"ทฤษฎีเกมส์ การสร้างแบบจำลองทางคณิตศาสตร์สำหรับระบบธรรมชาติ ตรรกศาสตร์ การวิเคราะห์ข้อมูลเชิงปริมาณ พีชคณิตเชิงเส้นสำหรับวิเคราะห์เครือข่าย ทฤษฎีความน่าจะเป็นสำหรับการคำนวณทางวิทยาศาสตร์ การสร้างกราฟแสดงผลข้อมูล และเครื่องมือการเรียนรู้ของเครื่องเบื้องต้นสำหรับการพยากรณ์","en":"Game Theory; Mathematical Modeling of Natural Systems; Logic; Quantitative Data Analysis; Linear Algebra for Network Analysis; Probability Theory for Scientific Computation; Data Visualization; Introductory Machine Learning Tools for Prediction","prof":"","email":"","mod":""},"s204":{"n":"วิทยาศาสตร์เชิงกำกับดูแล","c":"วทยย ๓๐๔ / SCSS 304","cr":"3","l":"MU","cat":"dna_s","th":"หลักการและกระบวนการทางวิทยาศาสตร์ที่ใช้ในการกำกับดูแลผลิตภัณฑ์และกิจกรรมที่เกี่ยวข้องกับสุขภาพ อาหาร พลังงาน และสิ่งแวดล้อม กรอบกฎหมายและมาตรฐานทั้งในประเทศและสากล การประเมินความเสี่ยงทางวิทยาศาสตร์ การประเมินผลกระทบสิ่งแวดล้อม การประเมินวัฏจักรชีวิตผลิตภัณฑ์ ระบบมาตรฐาน ISO 14001 มาตรฐาน ESG การรายงานความยั่งยืน ระบบคาร์บอนเครดิต กฎระเบียบการปรับคาร์บอนข้ามพรมแดน กระบวนการขออนุญาตและการรับรองมาตรฐาน และความสัมพันธ์ระหว่างหลักฐานทางวิทยาศาสตร์กับการกำหนดนโยบาย","en":"Scientific principles and processes used in regulating products and activities related to health, food, energy, and the environment; national and international legal frameworks and standards; scientific risk assessment; environmental impact assessment; life cycle assessment; ISO 14001 systems; ESG standards and sustainability reporting; carbon credit systems; carbon border adjustment mechanisms; regulatory approval and certification processes; relationship between scientific evidence and policy making","prof":"","email":"","mod":""},"h211":{"n":"วิทยาศาสตร์สุขภาพและชีวิตเพื่อความยั่งยืน","c":"วทยย ๓๑๑ / SCSS 311","cr":"4","l":"MU","cat":"dna_h","th":"สรีรวิทยามนุษย์ที่เกี่ยวข้องกับโภชนาการและสุขภาพ ชีวเคมีของสารอาหารหลักและจุลสาร กระบวนการย่อยอาหาร การดูดซึม และเมแทบอลิซึม ระบบอาหารตั้งแต่การผลิตจนถึงผู้บริโภค จุลชีววิทยาอาหารและความปลอดภัยทางอาหาร ระบบการจัดการคุณภาพ HACCP โรคไม่ติดต่อเรื้อรังที่เกี่ยวข้องกับโภชนาการ หลักการระบาดวิทยาเบื้องต้น ปฏิบัติการวิเคราะห์สารอาหาร การทดสอบจุลินทรีย์ในอาหาร การวัดคุณค่าทางโภชนาการ การตรวจวิเคราะห์สารปนเปื้อน และการศึกษาภาคสนามในสถานประกอบการอาหาร","en":"Human physiology relevant to nutrition and health; biochemistry of macronutrients and micronutrients; digestion, absorption, and metabolism processes; food systems from production to consumer; food microbiology and food safety; HACCP quality management systems; non-communicable diseases related to nutrition; introductory epidemiology principles; laboratory practice in nutrient analysis, microbial testing in food, nutritional value measurement, contaminant analysis; field study in food establishments","prof":"ผศ. กุลพร บุณยะเวศ","email":"","mod":""},"h221":{"n":"วิทยาศาสตร์พลังงานเพื่อความยั่งยืน","c":"วทยย ๓๒๑ / SCSS 321","cr":"4","l":"MU","cat":"dna_h","th":"เทอร์โมไดนามิกส์ประยุกต์สำหรับระบบพลังงาน หลักการผลิตไฟฟ้าจากแหล่งต่างๆ เทคโนโลยีเซลล์แสงอาทิตย์และความร้อนแสงอาทิตย์ พลังงานลมและการออกแบบกังหันลม พลังงานชีวมวลและเชื้อเพลิงชีวภาพ ระบบกักเก็บพลังงานด้วยแบตเตอรี่และไฮโดรเจน โครงข่ายไฟฟ้าอัจฉริยะ ประสิทธิภาพการใช้พลังงานในอาคารและอุตสาหกรรม ปฏิบัติการวัดประสิทธิภาพแผงเซลล์แสงอาทิตย์ การทดสอบกังหันลม การทดสอบเซลล์เชื้อเพลิง การตรวจวัดพลังงานในอาคาร และการจำลองระบบพลังงานด้วยซอฟต์แวร์","en":"Applied thermodynamics for energy systems; electricity generation principles from various sources; photovoltaic and solar thermal technologies; wind energy and turbine design; biomass energy and biofuels; battery and hydrogen energy storage systems; smart grid systems; energy efficiency in buildings and industry; laboratory practice in solar panel efficiency measurement, wind turbine testing, fuel cell testing, building energy auditing; energy system simulation using software","prof":"อ. ธันฐภัทร์ บุญช่วย","email":"","mod":""},"h231":{"n":"วิทยาศาสตร์สิ่งแวดล้อมและระบบนิเวศเพื่อความยั่งยืน","c":"วทยย ๓๓๑ / SCSS 331","cr":"4","l":"MU","cat":"dna_h","th":"นิเวศวิทยาประยุกต์และพลวัตของระบบนิเวศเขตร้อน การจัดการทรัพยากรน้ำและลุ่มน้ำ คุณภาพอากาศ แหล่งกำเนิดมลพิษ และผลกระทบต่อสุขภาพ การจัดการของเสียแบบครบวงจรและเศรษฐกิจหมุนเวียน วิทยาศาสตร์ภูมิอากาศ กลไกภาวะเรือนกระจก และแนวทางรับมือ ความหลากหลายทางชีวภาพ การอนุรักษ์ และการจัดการพื้นที่คุ้มครอง ระบบนิเวศทางทะเลและชายฝั่ง ปฏิบัติการวิเคราะห์คุณภาพน้ำและอากาศ การสำรวจความหลากหลายทางชีวภาพภาคสนาม การวัดก๊าซเรือนกระจก การใช้ระบบสารสนเทศภูมิศาสตร์เบื้องต้น และการประเมินรอยเท้านิเวศ","en":"Applied ecology and tropical ecosystem dynamics; water resource and watershed management; air quality, pollution sources, and health impacts; integrated waste management and circular economy; climate science, greenhouse mechanisms, and adaptation strategies; biodiversity, conservation, and protected area management; marine and coastal ecosystems; laboratory practice in water and air quality analysis, field biodiversity survey, greenhouse gas measurement, introductory geographic information system application; ecological footprint assessment","prof":"รศ. สาโรจน์ รุจิสรรค์สกุล","email":"","mod":""},"h311":{"n":"เทคโนโลยีสุขภาพและอาหารแห่งอนาคต","c":"วทยย ๔๑๒ / SCSS 412","cr":"3","l":"MU","cat":"dna_h","th":"โภชนาการเฉพาะบุคคลและการประยุกต์ใช้จีโนมิกส์ อาหารเสริมสุขภาพและอาหารฟังก์ชัน โปรตีนทางเลือกจากพืช แมลง และการเพาะเลี้ยงเซลล์ เทคโนโลยีการพิมพ์อาหารสามมิติ จุลินทรีย์ในลำไส้กับสุขภาพ การแพทย์แม่นยำและการดูแลสุขภาพรายบุคคล สุขภาพดิจิทัลและการแพทย์ทางไกล ปัญญาประดิษฐ์ในการวินิจฉัยโรคและพัฒนายา อุปกรณ์สวมใส่เพื่อสุขภาพ การวิเคราะห์ศักยภาพเชิงพาณิชย์และผลกระทบทางสังคมของเทคโนโลยี เนื้อหาอัปเดตเป็นรายปีตามพัฒนาการของเทคโนโลยี","en":"Personalised nutrition and genomics applications; functional foods and health-promoting food products; alternative proteins from plants, insects, and cell culture; three-dimensional food printing technology; gut microbiome and health; precision medicine and individualised health care; digital health and telemedicine; artificial intelligence in disease diagnosis and drug development; wearable health technology; commercial potential and social impact analysis of technologies; content updated annually according to technological developments","prof":"","email":"","mod":""},"h312":{"n":"ประสบการณ์วิชาชีพด้านวิทยาศาสตร์สุขภาพ","c":"วทยย ๔๑๓ / SCSS 413","cr":"3","l":"MU","cat":"dna_h","th":"การเรียนรู้จากผู้เชี่ยวชาญในอุตสาหกรรมสุขภาพและอาหารผ่านวิทยากรพิเศษจากบริษัทอาหาร โรงพยาบาล สถาบันวิจัย หน่วยงานกำกับดูแล และสตาร์ทอัพด้านสุขภาพ การศึกษาภาคสนามในโรงงานผลิตอาหาร ห้องปฏิบัติการวิจัย และศูนย์นวัตกรรม การรับโจทย์จริงจากภาคอุตสาหกรรมเพื่อพัฒนาข้อเสนอโครงการ การเตรียมความพร้อมทางวิชาชีพ ได้แก่ การเขียนประวัติส่วนตัว การสัมภาษณ์งาน การสร้างเครือข่ายวิชาชีพ และทักษะการนำเสนอ โจทย์จากรายวิชานี้สามารถต่อยอดเป็นโครงงานสหกิจศึกษาหรือโครงงานปริญญานิพนธ์","en":"Learning from professionals in health and food industries through guest speakers from food companies, hospitals, research institutes, regulatory agencies, and health startups; field study in food manufacturing facilities, research laboratories, and innovation centres; receiving real industry briefs for project proposal development; career readiness preparation including curriculum vitae writing, job interviews, professional networking, and presentation skills; industry briefs from this course can be extended into cooperative education or capstone projects","prof":"","email":"","mod":""},"h321":{"n":"เทคโนโลยีพลังงานแห่งอนาคต","c":"วทยย ๔๒๒ / SCSS 422","cr":"3","l":"MU","cat":"dna_h","th":"เศรษฐกิจไฮโดรเจนและไฮโดรเจนสีเขียว แบตเตอรี่ยุคใหม่ ได้แก่ โซลิดสเตต โซเดียมไอออน และโฟลว์แบตเตอรี่ เทคโนโลยีดักจับและใช้ประโยชน์จากคาร์บอน เครื่องปฏิกรณ์นิวเคลียร์ขนาดเล็กแบบโมดูลาร์ เทคโนโลยีนิวเคลียร์ฟิวชัน ปัญญาประดิษฐ์สำหรับจัดการพลังงาน เซลล์แสงอาทิตย์เพอรอฟสไกต์ ระบบพลังงานกระจายศูนย์ เทคโนโลยีเกษตรพลังงานแสงอาทิตย์ร่วม การวิเคราะห์ศักยภาพทางเทคนิคและเชิงพาณิชย์ นโยบายที่เกี่ยวข้อง เนื้อหาอัปเดตเป็นรายปี","en":"Hydrogen economy and green hydrogen; next-generation batteries including solid-state, sodium-ion, and flow batteries; carbon capture, utilisation, and storage technologies; small modular nuclear reactors; nuclear fusion technology; artificial intelligence for energy management; perovskite solar cells; distributed energy systems; agrivoltaic systems; technical and commercial potential analysis; related policies; content updated annually","prof":"อ. สุทธิชัย บุญประสพ","email":"","mod":""},"h322":{"n":"ประสบการณ์วิชาชีพด้านพลังงาน","c":"วทยย ๔๒๓ / SCSS 423","cr":"3","l":"MU","cat":"dna_h","th":"การเรียนรู้จากผู้เชี่ยวชาญในอุตสาหกรรมพลังงานผ่านวิทยากรจากบริษัทพลังงานทั้งรัฐวิสาหกิจและเอกชน บริษัทที่ปรึกษา สตาร์ทอัพเทคโนโลยีสะอาด และองค์กรระหว่างประเทศ การศึกษาภาคสนามในโรงไฟฟ้าพลังงานหมุนเวียน โรงงานผลิตแบตเตอรี่ ศูนย์วิจัยพลังงาน และฟาร์มเซลล์แสงอาทิตย์ การรับโจทย์จริงจากภาคอุตสาหกรรมพลังงานเพื่อวิเคราะห์ปัญหาและพัฒนาข้อเสนอแก้ไข การเตรียมความพร้อมทางวิชาชีพและการสร้างเครือข่าย โจทย์จากรายวิชานี้สามารถต่อยอดเป็นโครงงานสหกิจศึกษาหรือโครงงานปริญญานิพนธ์","en":"Learning from energy industry professionals through guest speakers from state and private energy companies, consulting firms, clean technology startups, and international organisations; field study at renewable power plants, battery manufacturing facilities, energy research centres, and solar farms; receiving real industry briefs for problem analysis and solution development; career readiness preparation and professional networking; industry briefs from this course can be extended into cooperative education or capstone projects","prof":"","email":"","mod":""},"h331":{"n":"เทคโนโลยีสิ่งแวดล้อมแห่งอนาคต","c":"วทยย ๔๓๒ / SCSS 432","cr":"3","l":"MU","cat":"dna_h","th":"การสำรวจระยะไกลและดาวเทียมสิ่งแวดล้อม การบำบัดมลพิษทางชีวภาพ เศรษฐกิจหมุนเวียนและการเพิ่มมูลค่าของเสีย ระบบคาร์บอนเครดิตและตลาดคาร์บอน มาตรฐาน ESG กับการรายงานความยั่งยืนขององค์กร แนวทางแก้ปัญหาจากธรรมชาติ ปัญญาประดิษฐ์และอินเทอร์เน็ตของสรรพสิ่งสำหรับติดตามสิ่งแวดล้อม เคมีสีเขียว เทคโนโลยีดักจับคาร์บอนจากอากาศโดยตรง ฟาร์มแนวตั้งในเขตเมือง และบล็อกเชนสำหรับตรวจสอบย้อนกลับห่วงโซ่อุปทาน เนื้อหาอัปเดตเป็นรายปี","en":"Remote sensing and environmental satellites; bioremediation; circular economy and waste upcycling; carbon credit systems and carbon markets; ESG standards and corporate sustainability reporting; nature-based solutions; artificial intelligence and Internet of Things for environmental monitoring; green chemistry; direct air carbon capture technology; urban vertical farming; blockchain for supply chain traceability; content updated annually","prof":"","email":"","mod":""},"h332":{"n":"ประสบการณ์วิชาชีพด้านสิ่งแวดล้อม","c":"วทยย ๔๓๓ / SCSS 433","cr":"3","l":"MU","cat":"dna_h","th":"การเรียนรู้จากผู้เชี่ยวชาญในสายงานสิ่งแวดล้อมผ่านวิทยากรจากบริษัทที่ปรึกษาสิ่งแวดล้อม องค์กรอนุรักษ์ธรรมชาติ หน่วยงานรัฐ บริษัทจัดการของเสีย และสตาร์ทอัพเทคโนโลยีสีเขียว การศึกษาภาคสนามในเขตรักษาพันธุ์สัตว์ป่า โรงบำบัดน้ำเสีย ศูนย์จัดการขยะ พื้นที่ฟื้นฟูป่า และโครงการเมืองสีเขียว การรับโจทย์จริงจากหน่วยงานด้านสิ่งแวดล้อมเพื่อพัฒนาข้อเสนอโครงการอนุรักษ์หรือฟื้นฟู การเตรียมความพร้อมทางวิชาชีพและการสร้างเครือข่าย โจทย์จากรายวิชานี้สามารถต่อยอดเป็นโครงงานสหกิจศึกษาหรือโครงงานปริญญานิพนธ์","en":"Learning from environmental professionals through guest speakers from environmental consulting firms, conservation organisations, government agencies, waste management companies, and green technology startups; field study at wildlife sanctuaries, wastewater treatment plants, waste management centres, forest restoration areas, and green city projects; receiving real briefs from environmental organisations for conservation or restoration project proposal development; career readiness preparation and professional networking; briefs from this course can be extended into cooperative education or capstone projects","prof":"","email":"","mod":""},"a0":{"n":"Intro Food & Health","c":"A0","cr":"3","l":"MU","cat":"mu_req","th":"รายวิชาพื้นฐานระบบอาหารและสุขภาพ ความสัมพันธ์ระหว่างอาหาร สุขภาพ และสิ่งแวดล้อม","en":"Introduction to food systems and health; food-health-environment nexus","prof":"","email":"","mod":""},"b0":{"n":"Intro Energy","c":"B0","cr":"3","l":"MU","cat":"mu_req","th":"รายวิชาพื้นฐานระบบพลังงาน แหล่งพลังงาน การผลิต การใช้ ผลกระทบสิ่งแวดล้อม","en":"Introduction to energy systems; energy sources, production, use, environmental impacts","prof":"","email":"","mod":""},"c0":{"n":"Intro Environment","c":"C0","cr":"3","l":"MU","cat":"mu_req","th":"รายวิชาพื้นฐานระบบสิ่งแวดล้อม ระบบนิเวศ ทรัพยากรธรรมชาติ การจัดการสิ่งแวดล้อม","en":"Introduction to environmental systems; ecosystems; natural resources; environmental management","prof":"","email":"","mod":""},"elec":{"n":"วิชาเลือกเฉพาะด้าน","c":"Elective","cr":"—","l":"MU","cat":"elective","th":"วิชาเลือกเฉพาะด้านวิทยาศาสตร์","en":"Science elective courses","prof":"","email":"","mod":""},"free":{"n":"วิชาเลือกเสรี","c":"Free Elec","cr":"—","l":"MU","cat":"elective","th":"รายวิชาเลือกเสรี","en":"Free elective courses","prof":"","email":"","mod":""},"cwie":{"n":"สหกิจศึกษา / CWIE","c":"CWIE","cr":"6","l":"MU","cat":"project","th":"สหกิจศึกษา ฝึกงานในสถานประกอบการจริง บูรณาการความรู้ทางวิทยาศาสตร์กับการปฏิบัติงาน","en":"Cooperative Work-Integrated Education; real-world workplace experience integrating science knowledge","prof":"","email":"","mod":""},"cap":{"n":"โครงงาน / Capstone","c":"Capstone","cr":"6","l":"MU","cat":"project","th":"โครงงานวิจัยปริญญานิพนธ์ บูรณาการความรู้ทั้งหมดเพื่อแก้ปัญหาจริงด้านความยั่งยืน","en":"Capstone research project integrating all knowledge to solve real sustainability problems","prof":"","email":"","mod":""},"t102":{"n":"แนวคิดพัฒนาที่ยั่งยืน","c":"จย.102","cr":"3","l":"TU","cat":"tu","th":"แนวคิดว่าด้วยการพัฒนาที่ยั่งยืน","en":"Concepts of Sustainable Development","prof":"","email":"","mod":""},"t103":{"n":"ธุรกิจกับสิทธิมนุษยชน","c":"จย.103","cr":"3","l":"TU","cat":"tu","th":"ธุรกิจกับสิทธิมนุษยชน","en":"Business and Human Rights","prof":"","email":"","mod":""},"t104":{"n":"คิดเชิงระบบ+นวัตกรรมยั่งยืน","c":"จย.104","cr":"3","l":"TU","cat":"tu","th":"การคิดเชิงระบบและนวัตกรรมเพื่อความยั่งยืน","en":"Systems Thinking & Innovation for Sustainability","prof":"","email":"","mod":""},"t202":{"n":"การมีส่วนร่วมผู้มีส่วนได้เสีย","c":"จย.202","cr":"3","l":"TU","cat":"tu","th":"การมีส่วนร่วมของผู้มีส่วนได้ส่วนเสีย","en":"Stakeholder Engagement","prof":"","email":"","mod":""},"t203":{"n":"จัดการผลกระทบ ESG","c":"จย.203","cr":"3","l":"TU","cat":"tu","th":"การจัดการผลกระทบและมาตรฐาน ESG","en":"Impact Management & ESG","prof":"","email":"","mod":""},"t204":{"n":"กฎหมายสิ่งแวดล้อม","c":"จย.204","cr":"3","l":"TU","cat":"tu","th":"กฎหมายสิ่งแวดล้อม","en":"Environmental Law","prof":"","email":"","mod":""},"t206":{"n":"ประเมินวงจรชีวิต LCA","c":"จย.206","cr":"3","l":"TU","cat":"tu","th":"การประเมินวงจรชีวิตของผลิตภัณฑ์","en":"Life Cycle Assessment","prof":"","email":"","mod":""},"t207":{"n":"วิสาหกิจเพื่อสังคม","c":"จย.207","cr":"3","l":"TU","cat":"tu","th":"วิสาหกิจเพื่อสังคม","en":"Social Enterprise","prof":"","email":"","mod":""},"t303":{"n":"นโยบายสาธารณะ+ยั่งยืน","c":"จย.303","cr":"3","l":"TU","cat":"tu","th":"นโยบายสาธารณะและความยั่งยืน","en":"Public Policy & Sustainability","prof":"","email":"","mod":""},"t305":{"n":"การเงินที่ยั่งยืน","c":"จย.305","cr":"3","l":"TU","cat":"tu","th":"การเงินที่ยั่งยืน","en":"Sustainable Finance","prof":"","email":"","mod":""},"t306":{"n":"การลงทุนที่ยั่งยืน","c":"จย.306","cr":"3","l":"TU","cat":"tu","th":"การลงทุนที่ยั่งยืน","en":"Sustainable Investment","prof":"","email":"","mod":""},"tge":{"n":"วิชาศึกษาทั่วไป TU","c":"TU GenEd","cr":"—","l":"TU","cat":"tu","th":"รายวิชาศึกษาทั่วไป มหาวิทยาลัยธรรมศาสตร์","en":"TU General Education","prof":"","email":"","mod":""},"tel":{"n":"วิชาเลือก TU","c":"TU Elective","cr":"—","l":"TU","cat":"tu","th":"รายวิชาเลือกเฉพาะด้าน มหาวิทยาลัยธรรมศาสตร์","en":"TU Elective courses","prof":"","email":"","mod":""},"e151":{"n":"สรีรวิทยามนุษย์เบื้องต้น","c":"วทยย ๑๕๑ / SCSS 151","cr":"3","l":"MU","cat":"elective","th":"ระบบอวัยวะของมนุษย์ ระบบประสาท ระบบต่อมไร้ท่อ ระบบหัวใจและหลอดเลือด ระบบหายใจ ระบบย่อยอาหารและการดูดซึม ระบบขับถ่าย ระบบกล้ามเนื้อและโครงร่าง ระบบภูมิคุ้มกัน ภาวะธำรงดุล เมแทบอลิซึมพื้นฐาน ความสัมพันธ์ระหว่างสรีรวิทยากับโภชนาการและสุขภาพ","en":"Human organ systems; nervous system; endocrine system; cardiovascular system; respiratory system; digestive system and absorption; excretory system; musculoskeletal system; immune system; homeostasis; basic metabolism; relationship between physiology, nutrition, and health","prof":"","email":"","mod":""},"e152":{"n":"ชีวเคมี","c":"วทยย ๑๕๒ / SCSS 152","cr":"3","l":"MU","cat":"elective","th":"โครงสร้างและหน้าที่ของกรดอะมิโนและโปรตีน จลนศาสตร์เอนไซม์ คาร์โบไฮเดรตและเมแทบอลิซึม ไกลโคลิซิส วัฏจักรเครบส์ ห่วงโซ่การขนส่งอิเล็กตรอน เมแทบอลิซึมของลิพิด กรดไขมันและเบตาออกซิเดชัน เมแทบอลิซึมของกรดอะมิโน วัฏจักรยูเรีย การควบคุมเมแทบอลิซึม การส่งสัญญาณของฮอร์โมน ชีวเคมีของวิตามินและแร่ธาตุ ชีวเคมีโภชนาการ","en":"Amino acid and protein structure and function; enzyme kinetics; carbohydrate metabolism; glycolysis; Krebs cycle; electron transport chain; lipid metabolism; fatty acids and beta-oxidation; amino acid metabolism; urea cycle; metabolic regulation; hormone signalling; biochemistry of vitamins and minerals; nutritional biochemistry","prof":"","email":"","mod":""},"e153":{"n":"จุลชีววิทยาทั่วไป","c":"วทยย ๑๕๓ / SCSS 153","cr":"3","l":"MU","cat":"elective","th":"โครงสร้างและหน้าที่ของแบคทีเรีย อาร์เคีย เชื้อรา และไวรัส สัณฐานวิทยาและการเจริญเติบโตของจุลินทรีย์ เมแทบอลิซึมของจุลินทรีย์ พันธุศาสตร์จุลินทรีย์ นิเวศวิทยาจุลินทรีย์ จุลินทรีย์ในดิน น้ำ และอากาศ จุลินทรีย์ก่อโรคและระบบภูมิคุ้มกัน จุลินทรีย์ในอาหารและการหมัก จุลินทรีย์กับการบำบัดสิ่งแวดล้อม เทคนิคทางจุลชีววิทยาเบื้องต้น การย้อมสีแกรม การเพาะเลี้ยงเชื้อ","en":"Structure and function of bacteria, archaea, fungi, and viruses; microbial morphology and growth; microbial metabolism; microbial genetics; microbial ecology; microorganisms in soil, water, and air; pathogenic microorganisms and immune response; microorganisms in food and fermentation; microorganisms in environmental remediation; basic microbiological techniques; Gram staining; microbial culture","prof":"","email":"","mod":""},"e254":{"n":"พันธุศาสตร์และชีววิทยาโมเลกุล","c":"วทยย ๒๕๔ / SCSS 254","cr":"3","l":"MU","cat":"elective","th":"พันธุศาสตร์เมนเดลขั้นสูง พันธุศาสตร์ประชากร โครงสร้างโครโมโซม การกลายพันธุ์ เทคโนโลยีดีเอ็นเอสายผสม เทคนิค PCR การโคลนยีน การหาลำดับเบสดีเอ็นเอ จีโนมิกส์ ทรานสคริปโทมิกส์ โปรตีโอมิกส์ เทคโนโลยีตัดต่อยีน CRISPR-Cas9 ชีวสารสนเทศเบื้องต้น การประยุกต์ใช้เทคโนโลยีชีวภาพในด้านอาหาร สุขภาพ และสิ่งแวดล้อม","en":"Advanced Mendelian genetics; population genetics; chromosome structure; mutation; recombinant DNA technology; PCR; gene cloning; DNA sequencing; genomics; transcriptomics; proteomics; CRISPR-Cas9 gene editing; introductory bioinformatics; biotechnology applications in food, health, and environment","prof":"","email":"","mod":""},"e255":{"n":"เคมีเชิงฟิสิกส์","c":"วทยย ๒๕๕ / SCSS 255","cr":"3","l":"MU","cat":"elective","th":"กฎข้อที่หนึ่ง สอง และสามของอุณหพลศาสตร์ เอนโทรปี พลังงานเสรีกิบส์ สมดุลเฟส แผนภาพเฟส สมดุลเคมีเชิงอุณหพลศาสตร์ จลนศาสตร์เคมีขั้นสูง ทฤษฎีสถานะทรานซิชัน เคมีไฟฟ้าเชิงอุณหพลศาสตร์ เซลล์เชื้อเพลิง แบตเตอรี่ ปรากฏการณ์พื้นผิวและการเร่งปฏิกิริยา เคมีเชิงฟิสิกส์ของสารกึ่งตัวนำเบื้องต้น","en":"First, second, and third laws of thermodynamics; entropy; Gibbs free energy; phase equilibria; phase diagrams; chemical equilibrium thermodynamics; advanced chemical kinetics; transition state theory; electrochemical thermodynamics; fuel cells; batteries; surface phenomena and catalysis; introductory physical chemistry of semiconductors","prof":"","email":"","mod":""},"e256":{"n":"ฟิสิกส์สมัยใหม่","c":"วทยย ๒๕๖ / SCSS 256","cr":"3","l":"MU","cat":"elective","th":"ทฤษฎีสัมพัทธภาพพิเศษ การแผ่รังสีวัตถุดำ ปรากฏการณ์โฟโตอิเล็กทริก ทวิภาวะคลื่น-อนุภาค กลศาสตร์ควอนตัมเบื้องต้น แบบจำลองอะตอมไฮโดรเจน ทฤษฎีแถบพลังงาน สารกึ่งตัวนำ รอยต่อพี-เอ็น ไดโอดและทรานซิสเตอร์ ฟิสิกส์ของเซลล์แสงอาทิตย์ ฟิสิกส์นิวเคลียร์ กัมมันตภาพรังสี ปฏิกิริยานิวเคลียร์ฟิชชันและฟิวชัน","en":"Special relativity; blackbody radiation; photoelectric effect; wave-particle duality; introductory quantum mechanics; hydrogen atom model; energy band theory; semiconductors; p-n junctions; diodes and transistors; physics of solar cells; nuclear physics; radioactivity; nuclear fission and fusion","prof":"","email":"","mod":""},"e257":{"n":"วัสดุศาสตร์เบื้องต้น","c":"วทยย ๒๕๗ / SCSS 257","cr":"3","l":"MU","cat":"elective","th":"โครงสร้างผลึกและอสัณฐาน พันธะในของแข็ง โลหะ เซรามิกส์ พอลิเมอร์ วัสดุผสม สมบัติเชิงกล สมบัติทางไฟฟ้า สมบัติทางแสง สมบัติทางความร้อน วัสดุนาโน วัสดุสำหรับแบตเตอรี่และเซลล์เชื้อเพลิง วัสดุเพอรอฟสไกต์สำหรับเซลล์แสงอาทิตย์ วัสดุสำหรับการกักเก็บไฮโดรเจน วัสดุเพื่อความยั่งยืน","en":"Crystalline and amorphous structures; bonding in solids; metals; ceramics; polymers; composites; mechanical properties; electrical properties; optical properties; thermal properties; nanomaterials; materials for batteries and fuel cells; perovskite materials for solar cells; hydrogen storage materials; materials for sustainability","prof":"","email":"","mod":""},"e158":{"n":"นิเวศวิทยาและชีววิทยาการอนุรักษ์","c":"วทยย ๑๕๘ / SCSS 158","cr":"3","l":"MU","cat":"elective","th":"นิเวศวิทยาประชากรขั้นสูง นิเวศวิทยาชุมชน ปฏิสัมพันธ์ระหว่างสิ่งมีชีวิต การสืบทอดแทนที่ นิเวศวิทยาระบบ การไหลของพลังงานและวัฏจักรสารอาหารในระบบนิเวศ ชีวภูมิศาสตร์ ความหลากหลายทางชีวภาพและดัชนีความหลากหลาย ภัยคุกคามต่อความหลากหลายทางชีวภาพ หลักการอนุรักษ์ การจัดการพื้นที่คุ้มครอง นิเวศวิทยาการฟื้นฟู การสำรวจภาคสนาม","en":"Advanced population ecology; community ecology; species interactions; ecological succession; ecosystem ecology; energy flow and nutrient cycling in ecosystems; biogeography; biodiversity and diversity indices; threats to biodiversity; conservation principles; protected area management; restoration ecology; field survey","prof":"","email":"","mod":""},"e259":{"n":"เคมีสิ่งแวดล้อม","c":"วทยย ๒๕๙ / SCSS 259","cr":"3","l":"MU","cat":"elective","th":"เคมีของชั้นบรรยากาศ มลพิษทางอากาศ ก๊าซเรือนกระจก เคมีของแหล่งน้ำ คุณภาพน้ำ มลพิษทางน้ำ เคมีของดิน โลหะหนักและสารพิษในสิ่งแวดล้อม กระบวนการฟื้นฟูสิ่งแวดล้อม เคมีสีเขียว วัฏจักรชีวเคมีในระบบธรรมชาติ การวิเคราะห์ตัวอย่างน้ำและอากาศ เครื่องมือวิเคราะห์สำหรับติดตามคุณภาพสิ่งแวดล้อม","en":"Atmospheric chemistry; air pollutants; greenhouse gases; aquatic chemistry; water quality; water pollutants; soil chemistry; heavy metals and environmental toxicants; environmental remediation processes; green chemistry; biogeochemical cycles in natural systems; water and air sample analysis; analytical instruments for environmental quality monitoring","prof":"","email":"","mod":""},"e260":{"n":"ธรณีวิทยาและวิทยาศาสตร์โลก","c":"วทยย ๒๖๐ / SCSS 260","cr":"3","l":"MU","cat":"elective","th":"โครงสร้างภายในของโลก ธรณีแปรสัณฐาน แร่วิทยาและหินวิทยา วัฏจักรของหิน ธรณีวิทยาพื้นผิว กระบวนการกัดเซาะและการตกตะกอน อุทกวิทยาเบื้องต้น ทรัพยากรดิน วัฏจักรคาร์บอนในมิติธรณีวิทยา ประวัติภูมิอากาศโลก ภัยพิบัติทางธรรมชาติ ระบบสารสนเทศภูมิศาสตร์เบื้องต้น การสำรวจระยะไกลเบื้องต้น","en":"Internal structure of the Earth; plate tectonics; mineralogy and petrology; rock cycle; surface geology; erosion and sedimentation; introductory hydrology; soil resources; geological carbon cycle; Earth's climate history; natural hazards; introductory geographic information systems; introductory remote sensing","prof":"","email":"","mod":""},"e261":{"n":"สถิติประยุกต์สำหรับวิทยาศาสตร์","c":"วทยย ๒๖๑ / SCSS 261","cr":"3","l":"MU","cat":"elective","th":"สถิติเชิงพรรณนาและการแจกแจง การทดสอบสมมติฐาน การวิเคราะห์ความแปรปรวนทางเดียวและสองทาง การวิเคราะห์การถดถอยเชิงเส้นและพหุคูณ สหสัมพันธ์ การวิเคราะห์ตัวแปรพหุ สถิตินอนพาราเมตริก การออกแบบการทดลองเชิงสถิติ การวิเคราะห์ข้อมูลอนุกรมเวลาเบื้องต้น การใช้ซอฟต์แวร์ทางสถิติ การประยุกต์ใช้สถิติกับข้อมูลทางวิทยาศาสตร์สิ่งแวดล้อม สุขภาพ และพลังงาน","en":"Descriptive statistics and distributions; hypothesis testing; one-way and two-way analysis of variance; simple and multiple linear regression; correlation; multivariate analysis; nonparametric statistics; statistical experimental design; introductory time series analysis; statistical software; applications of statistics to environmental, health, and energy data","prof":"","email":"","mod":""},"e262":{"n":"การเขียนโปรแกรมและวิทยาศาสตร์ข้อมูล","c":"วทยย ๒๖๒ / SCSS 262","cr":"3","l":"MU","cat":"elective","th":"ภาษาไพทอนสำหรับวิทยาศาสตร์ โครงสร้างข้อมูลและขั้นตอนวิธี ไลบรารี NumPy Pandas Matplotlib Scikit-learn การเก็บรวบรวมและทำความสะอาดข้อมูล การสร้างภาพข้อมูล การเรียนรู้ของเครื่องเบื้องต้น การจำแนกประเภทและการถดถอย ต้นไม้ตัดสินใจ การจัดกลุ่มข้อมูล ข้อมูลเชิงพื้นที่เบื้องต้น การประยุกต์ใช้วิทยาศาสตร์ข้อมูลกับปัญหาด้านสิ่งแวดล้อม สุขภาพ และพลังงาน","en":"Python for science; data structures and algorithms; NumPy, Pandas, Matplotlib, and Scikit-learn libraries; data collection and cleaning; data visualisation; introductory machine learning; classification and regression; decision trees; clustering; introductory spatial data; applications of data science to environmental, health, and energy problems","prof":"","email":"","mod":""},"pdna_h":{"n":"พื้นฐานวิทยาศาสตร์สุขภาพเพื่อความยั่งยืน","c":"วทยย ๓๑๐ / SCSS 310","cr":"3","l":"MU","cat":"dna_h","th":"ความสัมพันธ์ระหว่างสุขภาพมนุษย์กับระบบนิเวศ ปัจจัยกำหนดสุขภาพทั้งทางกายภาพ ชีวภาพ และสังคม โภชนาการพื้นฐานและโภชนาการเพื่อความยั่งยืน ระบบอาหารโลกตั้งแต่การผลิตจนถึงผู้บริโภค ความมั่นคงทางอาหาร โรคอุบัติใหม่และโรคอุบัติซ้ำ แนวคิดสุขภาพหนึ่งเดียวที่เชื่อมโยงสุขภาพคน สัตว์ และสิ่งแวดล้อม สุขาภิบาลและสุขอนามัยสิ่งแวดล้อม สารพิษในสิ่งแวดล้อมที่ส่งผลต่อสุขภาพ โรคไม่ติดต่อเรื้อรังที่เกี่ยวข้องกับวิถีชีวิตและอาหาร หลักการสาธารณสุขเบื้องต้น เป้าหมายการพัฒนาที่ยั่งยืนด้านสุขภาพ","en":"Relationship between human health and ecosystems; physical, biological, and social determinants of health; basic nutrition and sustainable diets; global food systems from production to consumption; food security; emerging and re-emerging diseases; One Health concept linking human, animal, and environmental health; sanitation and environmental hygiene; environmental toxicants affecting health; non-communicable diseases related to lifestyle and diet; introductory public health principles; Sustainable Development Goals related to health","prof":"","email":"","mod":""},"pdna_e":{"n":"พื้นฐานวิทยาศาสตร์พลังงานเพื่อความยั่งยืน","c":"วทยย ๓๒๐ / SCSS 320","cr":"3","l":"MU","cat":"dna_h","th":"ระบบพลังงานโลกและสถานการณ์พลังงานปัจจุบัน เทอร์โมไดนามิกส์เบื้องต้นสำหรับระบบพลังงาน พลังงานฟอสซิลและผลกระทบต่อสิ่งแวดล้อม พลังงานหมุนเวียน ได้แก่ พลังงานแสงอาทิตย์ พลังงานลม พลังงานชีวมวลและเชื้อเพลิงชีวภาพ พลังงานน้ำ พลังงานความร้อนใต้พิภพ เทคโนโลยีการกักเก็บพลังงาน ประสิทธิภาพการใช้พลังงานในภาคอาคารและอุตสาหกรรม ความเป็นธรรมในการเข้าถึงพลังงาน ความยากจนทางพลังงาน การเปลี่ยนผ่านทางพลังงาน เป้าหมายการพัฒนาที่ยั่งยืนด้านพลังงาน","en":"Global energy systems and current energy situation; introductory thermodynamics for energy systems; fossil fuels and environmental impacts; renewable energy including solar energy, wind energy, biomass and biofuels, hydropower, and geothermal energy; energy storage technologies; energy efficiency in buildings and industry; energy access and equity; energy poverty; energy transition; Sustainable Development Goals related to energy","prof":"","email":"","mod":""},"pdna_v":{"n":"พื้นฐานวิทยาศาสตร์สิ่งแวดล้อมเพื่อความยั่งยืน","c":"วทยย ๓๓๐ / SCSS 330","cr":"3","l":"MU","cat":"dna_h","th":"ระบบโลกและขอบเขตปลอดภัยของโลก นิเวศวิทยาพื้นฐานและพลวัตของระบบนิเวศ วัฏจักรสารอาหารในระบบธรรมชาติ การเปลี่ยนแปลงสภาพภูมิอากาศ กลไกภาวะเรือนกระจก ก๊าซเรือนกระจก ความหลากหลายทางชีวภาพและภัยคุกคาม มลพิษทางน้ำ อากาศ และดิน การจัดการของเสียและเศรษฐกิจหมุนเวียน รอยเท้านิเวศและรอยเท้าคาร์บอน ทรัพยากรน้ำและการจัดการลุ่มน้ำ ระบบนิเวศทางทะเลและชายฝั่ง เป้าหมายการพัฒนาที่ยั่งยืนด้านสิ่งแวดล้อม","en":"Earth systems and planetary boundaries; basic ecology and ecosystem dynamics; nutrient cycles in natural systems; climate change; greenhouse mechanisms; greenhouse gases; biodiversity and threats; water, air, and soil pollution; waste management and circular economy; ecological footprint and carbon footprint; water resources and watershed management; marine and coastal ecosystems; Sustainable Development Goals related to the environment","prof":"","email":"","mod":""}};/*__DB_END__*/

// ===== TRACK DEFINITIONS (initial state) =====
/*__TRACKS_START__*/const TRACKS_INIT=[{"id":"mu_mu","label":"เข้า MU → จบ MU","badge":"MU","bc":"bmu","desc":"แผน 1 Single Degree วท.บ. ≥128 cr · เรียน MU ตลอด","sems":[{"t":"ปี 1 · เทอม 1","l":"MU","cs":["muge","eng","thai","ib","im","ip","ic","blb","mlb","plb","clb","lit"]},{"t":"ปี 1 · เทอม 2","l":"MU","cs":["e151","e152","e153","e158","e261","e262"]},{"t":"ปี 2 · เทอม 1","l":"MU","cs":["e254","e255","e256","e257","e259","e260"]},{"t":"ปี 2 · เทอม 2","l":"MU","cs":["s201","s202","s203","s204","lit","free"]},{"t":"ปี 3 · เทอม 1","l":"MU","cs":["pdna_h","pdna_e","pdna_v","h211","h221","h231"]},{"t":"ปี 3 · เทอม 2","l":"MU","cs":["h311","h312","h321","h322","h331","h332"]},{"t":"ปี 4 · เทอม 1","l":"MU","cs":["elec","cap","free"]},{"t":"ปี 4 · เทอม 2","l":"MU","cs":["cwie"]}]},{"id":"mu_tu","label":"เข้า MU → จบ TU","badge":"MU→TU","bc":"btu","desc":"แผน 2 Double Degree วท.บ.+กจ.บ. ≥150 cr · เริ่ม MU จบ TU","sems":[{"t":"ปี 1 · เทอม 1","l":"MU","cs":["muge","eng","thai","ib","im","ip","ic","blb","mlb","plb","clb","lit"]},{"t":"ปี 1 · เทอม 2","l":"MU","cs":["e151","e152","e153","e158","e261","e262"]},{"t":"ปี 2 · เทอม 1","l":"MU","cs":["e254","e255","e256","e257","e259","e260"]},{"t":"ปี 2 · เทอม 2","l":"MU","cs":["s201","s202","s203","s204","pdna_h","pdna_e","pdna_v"]},{"t":"ปี 3 · เทอม 1","l":"MU","cs":["h211","h221","h231","h311","h312","h321","h322","h331","h332"]},{"t":"ปี 3 · เทอม 2","l":"TU","cs":["t102","t103","t104","t206","t306","tel"]},{"t":"ปี 4 · เทอม 1","l":"TU","cs":["t202","t203","t204","t207","t303","t305"]},{"t":"ปี 4 · เทอม 2","l":"MU/TU","cs":["cwie","cap"]}]},{"id":"tu_mu","label":"เข้า TU → จบ MU","badge":"TU→MU","bc":"bmu","desc":"แผน 3 Double Degree กจ.บ.+วท.บ. ≥150 cr · เริ่ม TU จบ MU","sems":[{"t":"ปี 1 · เทอม 1","l":"TU","cs":["tge","t102","t103"]},{"t":"ปี 1 · เทอม 2","l":"TU","cs":["tge","t104","t206"]},{"t":"ปี 2 · เทอม 1","l":"TU","cs":["t202","t203","t204","t207","t306","tel"]},{"t":"ปี 2 · เทอม 2","l":"TU","cs":["t303","t305","tel"]},{"t":"ปี 3 · เทอม 1","l":"MU","cs":["ib","im","ip","ic","blb","mlb","plb","clb","e261","e262"]},{"t":"ปี 3 · เทอม 2","l":"MU","cs":["s201","s202","s203","s204","pdna_h","pdna_e","pdna_v"]},{"t":"ปี 4 · เทอม 1","l":"MU","cs":["h211","h221","h231","h311","h312","h321","h322","h331","h332"]},{"t":"ปี 4 · เทอม 2","l":"MU","cs":["cwie","cap"]}]},{"id":"tu_tu","label":"เข้า TU → จบ TU","badge":"TU","bc":"btu","desc":"แผน 4 Single Degree กจ.บ. · เส้นทาง TU เต็มรูปแบบ","sems":[{"t":"ปี 1 · เทอม 1","l":"TU","cs":["tge","t102","t103"]},{"t":"ปี 1 · เทอม 2","l":"TU","cs":["tge","t104","t206"]},{"t":"ปี 2 · เทอม 1","l":"TU","cs":["t202","t203","t204","t207","t306","tel"]},{"t":"ปี 2 · เทอม 2","l":"TU","cs":["t303","t305","tel"]},{"t":"ปี 3 · เทอม 1","l":"TU","cs":["tel"]},{"t":"ปี 3 · เทอม 2","l":"TU","cs":["tel"]},{"t":"ปี 4 · เทอม 1","l":"TU","cs":["tel"]},{"t":"ปี 4 · เทอม 2","l":"TU","cs":["cwie","cap"]}]}];/*__TRACKS_END__*/

// Deep clone for mutable state
let tracks = JSON.parse(JSON.stringify(TRACKS_INIT));
// Track moved courses per track: { trackIdx: Set of "courseId:fromSem:toSem" }
let movedSets = [new Set(),new Set(),new Set(),new Set()];
let curTrack = 0;
let editId = null;
let undoStack = [];

// ===== DIRTY STATE (unsaved changes) =====
let isDirty=false;
function markDirty(){
  isDirty=true;
  const dot=document.getElementById('dirtyDot');
  if(dot)dot.style.display='';
  const btn=document.getElementById('saveBtn');
  if(btn)btn.style.animation='pulse .6s ease';
  setTimeout(()=>{if(btn)btn.style.animation='';},700);
}
function clearDirty(){
  isDirty=false;
  const dot=document.getElementById('dirtyDot');
  if(dot)dot.style.display='none';
}
// Warn before leaving page with unsaved changes
window.addEventListener('beforeunload',function(e){
  if(isDirty){e.preventDefault();e.returnValue='';}
});

// ===== NAV =====
function go(p){
  document.querySelectorAll('.page').forEach(x=>x.classList.remove('on'));
  document.querySelectorAll('.nav-inner button').forEach(x=>x.classList.remove('on'));
  document.getElementById('p-'+p).classList.add('on');
  document.getElementById('n-'+p).classList.add('on');
  if(p==='plan') renderPlan();
  if(p==='compare') renderCompare();
  if(p==='action') renderAction();
  if(p==='timeline') renderTimeline();
  if(p==='tasks') renderTasks();
  if(p==='reg') renderReg();
}

// ===== TABS =====
function renderTabs(){
  document.getElementById('tabs').innerHTML=tracks.map((t,i)=>
    `<button class="tab ${i===curTrack?'on':''}" onclick="pickTrack(${i})">${t.label} <span class="b ${t.bc}">${t.badge}</span></button>`
  ).join('');
}
function pickTrack(i){curTrack=i;renderTabs();renderPlan();}

// ===== PLAN =====
function renderPlan(){
  const tr=tracks[curTrack];
  document.getElementById('trackInfo').innerHTML=`<strong>${tr.label}</strong> — ${tr.desc}`;
  
  // Stats
  let totalCr=0, muCr=0, tuCr=0, courseCount=0;
  tr.sems.forEach(s=>{
    s.cs.forEach(cid=>{
      const c=DB[cid];if(!c)return;
      courseCount++;
      const cr=parseInt(c.cr)||0;
      totalCr+=cr;
      if(c.l==='TU')tuCr+=cr;else muCr+=cr;
    });
  });
  document.getElementById('trackStats').innerHTML=`
    <div class="stat"><div class="sv">${totalCr}</div><div class="sl">หน่วยกิตรวม</div></div>
    <div class="stat"><div class="sv">${muCr}</div><div class="sl">MU credits</div></div>
    <div class="stat"><div class="sv">${tuCr}</div><div class="sl">TU credits</div></div>
    <div class="stat"><div class="sv">${courseCount}</div><div class="sl">รายวิชา</div></div>
  `;

  const moved=movedSets[curTrack];
  let html='';
  tr.sems.forEach((s,si)=>{
    const lc=s.l.includes('TU')?'loc-tu':'loc-mu';
    let crSum=0;
    s.cs.forEach(cid=>{const c=DB[cid];if(c)crSum+=parseInt(c.cr)||0;});
    html+=`<div class="sem" data-si="${si}" ondragover="dragOver(event)" ondragleave="dragLeave(event)" ondrop="drop(event,${si})" oncontextmenu="openCtx(event,${si})">
      <div class="sem-h"><span>${s.t}</span><span class="loc ${lc}">${s.l}</span><span class="cr">${crSum} cr</span></div>
      <div class="sem-b ${s.cs.length===0?'empty':''}" data-si="${si}">`;
    if(s.cs.length===0) html+='ยังไม่มีรายวิชา — กดปุ่มด้านล่างเพื่อเพิ่ม';
    s.cs.forEach((cid,ci)=>{
      const c=DB[cid];if(!c)return;
      const dl=c.l==='TU'?'dot-tu':c.l==='MU'?'dot-mu':'dot-x';
      const isMoved=moved.has(cid+':'+si);
      const catC=CAT_COLORS[c.cat]||'#94A0AF';
      html+=`<div class="chip ${isMoved?'moved':''}" draggable="true" data-cid="${cid}" data-si="${si}" data-ci="${ci}"
        ondragstart="dragStart(event)" ondragend="dragEnd(event)"
        onclick="openM('${cid}',${si},${curTrack})">
        <span class="dot ${dl}"></span>
        <span class="cat-badge" style="background:${catC}18;color:${catC};border:1px solid ${catC}30;font-size:.5rem;padding:1px 4px">${CAT_LABELS[c.cat]||''}</span>
        <span class="ccode">${c.c}</span>
        <span class="cname">${c.n}</span>
        <span class="ccr">${c.cr}</span>
        <span class="cedit" onclick="event.stopPropagation();openME('${cid}')" title="แก้ไข">✎</span>
        <span class="cdel" onclick="event.stopPropagation();confirmRemove('${cid}',${si})" title="ลบออกจากเทอมนี้">🗑</span>
      </div>`;
    });
    // Add course button
    html+=`<div style="text-align:center;margin:4px 0 2px"><button onclick="event.stopPropagation();openCtxAt(event.target.getBoundingClientRect().left,event.target.getBoundingClientRect().bottom+4,${si})" style="background:none;border:1px dashed var(--border);border-radius:5px;padding:4px 14px;font-family:inherit;font-size:.62rem;color:var(--text-faint);cursor:pointer;transition:.15s;width:100%" onmouseover="this.style.borderColor='var(--blue-mid)';this.style.color='var(--navy)';this.style.background='rgba(43,91,138,.03)'" onmouseout="this.style.borderColor='var(--border)';this.style.color='var(--text-faint)';this.style.background='none'">+ เพิ่มรายวิชา</button></div>`;
    html+=`</div></div>`;
  });
  document.getElementById('semGrid').innerHTML=html;
}

// ===== DRAG & DROP =====
let dragCid=null, dragFromSem=null, dragFromIdx=null;

function dragStart(e){
  const el=e.target.closest('.chip');
  dragCid=el.dataset.cid;
  dragFromSem=parseInt(el.dataset.si);
  dragFromIdx=parseInt(el.dataset.ci);
  el.classList.add('dragging');
  e.dataTransfer.effectAllowed='move';
  e.dataTransfer.setData('text/plain',dragCid);
  // Ghost
  const ghost=document.createElement('div');
  ghost.className='ghost';
  ghost.textContent=DB[dragCid]?.n||dragCid;
  ghost.id='dragGhost';
  document.body.appendChild(ghost);
  e.dataTransfer.setDragImage(ghost,ghost.offsetWidth/2,ghost.offsetHeight/2);
  setTimeout(()=>{if(ghost.parentNode)ghost.remove()},0);
}
function dragEnd(e){
  document.querySelectorAll('.chip.dragging').forEach(x=>x.classList.remove('dragging'));
  document.querySelectorAll('.sem.drop-over').forEach(x=>x.classList.remove('drop-over'));
  const g=document.getElementById('dragGhost');if(g)g.remove();
}
function dragOver(e){
  e.preventDefault();
  e.dataTransfer.dropEffect='move';
  e.currentTarget.classList.add('drop-over');
}
function dragLeave(e){
  e.currentTarget.classList.remove('drop-over');
}
function drop(e,toSem){
  e.preventDefault();
  e.currentTarget.classList.remove('drop-over');
  if(dragCid===null||dragFromSem===null)return;
  if(dragFromSem===toSem)return;

  const tr=tracks[curTrack];
  const fromArr=tr.sems[dragFromSem].cs;
  const idx=fromArr.indexOf(dragCid);
  if(idx===-1)return;

  // Save undo
  undoStack.push({track:curTrack,from:dragFromSem,to:toSem,cid:dragCid,idx:idx});

  // Move
  fromArr.splice(idx,1);
  tr.sems[toSem].cs.push(dragCid);

  // Mark as moved
  movedSets[curTrack].add(dragCid+':'+toSem);

  renderPlan();
  showUndo(dragCid,dragFromSem,toSem);
  markDirty();

  dragCid=null;dragFromSem=null;dragFromIdx=null;
}

function showUndo(cid,from,to){
  const tr=tracks[curTrack];
  const name=DB[cid]?.n||cid;
  const el=document.getElementById('undoContainer');
  el.innerHTML=`<div class="undo-bar">
    ย้าย <strong>${name}</strong> จาก ${tr.sems[from].t} → ${tr.sems[to].t}
    <button onclick="doUndo()">↩ Undo</button>
  </div>`;
  clearTimeout(window._undoTimer);
  window._undoTimer=setTimeout(()=>{el.innerHTML=''},5000);
}

function doUndo(){
  if(undoStack.length===0)return;
  const u=undoStack.pop();
  const tr=tracks[u.track];
  if(u.to>=0){
    // Was a move → remove from target, put back in source
    const toArr=tr.sems[u.to].cs;
    const idx2=toArr.indexOf(u.cid);
    if(idx2!==-1)toArr.splice(idx2,1);
    movedSets[u.track].delete(u.cid+':'+u.to);
  }
  // Put back in original position
  tr.sems[u.from].cs.splice(u.idx,0,u.cid);
  if(u.track===curTrack)renderPlan();
  document.getElementById('undoContainer').innerHTML='';
}

// ===== CONFIRM DELETE POPUP (trash icon) =====
function confirmRemove(cid,si){
  const c=DB[cid];if(!c)return;
  const tr=tracks[curTrack];
  const semName=tr.sems[si]?.t||'';
  const pop=document.getElementById('confirmPop');

  // Position near the chip that was clicked
  const chipEl=document.querySelector(`.chip[data-cid="${cid}"][data-si="${si}"]`);
  if(chipEl){
    const r=chipEl.getBoundingClientRect();
    let left=r.left;
    let top=r.bottom+4;
    if(left+240>window.innerWidth)left=window.innerWidth-250;
    if(top+120>window.innerHeight)top=r.top-120;
    if(left<8)left=8;
    pop.style.left=left+'px';
    pop.style.top=top+'px';
  }

  pop.innerHTML=`
    <div class="cp-msg">ลบ <span class="cp-name">${c.n}</span><br>ออกจาก <strong>${semName}</strong> ?</div>
    <div class="cp-btns">
      <button class="btn bs" onclick="closeConfirm()" style="padding:6px 14px;font-size:.68rem">ยกเลิก</button>
      <button class="btn" id="cpDelBtn" onclick="doRemove('${cid}',${si})" style="padding:6px 14px;font-size:.68rem;font-weight:600;background:#C0392B;color:#fff;border:none;border-radius:5px">🗑 ลบรายวิชานี้</button>
    </div>
  `;
  pop.style.display='block';
}

function closeConfirm(){
  document.getElementById('confirmPop').style.display='none';
}

function doRemove(cid,si){
  // Show hourglass
  const btn=document.getElementById('cpDelBtn');
  if(btn){btn.textContent='⏳ กำลังลบ...';btn.style.background='#7F8C8D';btn.style.pointerEvents='none';}

  setTimeout(()=>{
    closeConfirm();
    const tr=tracks[curTrack];
    const arr=tr.sems[si].cs;
    const idx=arr.indexOf(cid);
    if(idx===-1)return;

    const c=DB[cid];
    const semName=tr.sems[si].t;

    undoStack.push({track:curTrack,from:si,to:-1,cid:cid,idx:idx});
    arr.splice(idx,1);
    movedSets[curTrack].delete(cid+':'+si);

    renderPlan();
    markDirty();

    const el=document.getElementById('undoContainer');
    el.innerHTML=`<div class="undo-bar">
      ลบ <strong>${c?.n||cid}</strong> ออกจาก ${semName}
      <button onclick="doUndo()" style="background:#C0392B;border-color:#C0392B">↩ Undo — กดเพื่อเอาคืน</button>
    </div>`;
    clearTimeout(window._undoTimer);
    window._undoTimer=setTimeout(()=>{el.innerHTML=''},8000);
  },300);
}

// Close confirm popup when clicking elsewhere
document.addEventListener('click',function(e){
  const pop=document.getElementById('confirmPop');
  if(pop.style.display!=='none'&&!pop.contains(e.target)&&!e.target.closest('.cdel')){
    closeConfirm();
  }
});

// ===== TOUCH SUPPORT =====
// Chip: tap หรือ long-press → เปิด overlay (มีปุ่มลบ)
// พื้นที่ว่างเทอม: long-press → context menu เพิ่มวิชา
let touchTimer=null,touchSemIdx=null;
let touchStartX=0,touchStartY=0,touchMoved=false;
let touchChipEl=null;

document.addEventListener('touchstart',function(e){
  touchMoved=false;
  const touch=e.touches[0];
  touchStartX=touch.clientX;
  touchStartY=touch.clientY;
  clearTimeout(touchTimer);

  const chip=e.target.closest('.chip');
  const sem=e.target.closest('.sem');

  if(chip){
    touchChipEl=chip;
    // Long-press on chip → open detail overlay (same as tap, but handles cases where onclick doesn't fire)
    touchTimer=setTimeout(()=>{
      if(!touchMoved && touchChipEl){
        const cid=touchChipEl.dataset.cid;
        const si=parseInt(touchChipEl.dataset.si);
        openM(cid,si,curTrack);
        touchChipEl=null;
      }
    },400);
  } else if(sem && !chip){
    touchChipEl=null;
    const si=parseInt(sem.dataset.si);
    touchSemIdx=si;
    touchTimer=setTimeout(()=>{
      if(!touchMoved){
        openCtxAt(touch.clientX,touch.clientY,si);
      }
    },500);
  } else {
    touchChipEl=null;
  }
},{passive:true});

document.addEventListener('touchmove',function(e){
  const touch=e.touches[0];
  if(Math.abs(touch.clientX-touchStartX)>10||Math.abs(touch.clientY-touchStartY)>10){
    touchMoved=true;
    clearTimeout(touchTimer);
  }
},{passive:true});

document.addEventListener('touchend',function(){
  clearTimeout(touchTimer);
  touchChipEl=null;
},{passive:true});

// ===== CONTEXT MENU (right-click / long-press to add course) =====
let ctxSemIdx=null;
let ctxFilterLoc='MU'; // which tab is active in ctx

function openCtx(e,si){
  e.preventDefault();
  openCtxAt(e.clientX,e.clientY,si);
}

function openCtxAt(x,y,si){
  ctxSemIdx=si;
  ctxFilterLoc='MU';
  const menu=document.getElementById('ctxMenu');
  // Position
  const mw=300,mh=400;
  let left=Math.min(x,window.innerWidth-mw-10);
  let top=Math.min(y,window.innerHeight-mh-10);
  if(left<10)left=10;
  if(top<50)top=50;
  menu.style.left=left+'px';
  menu.style.top=top+'px';
  menu.style.display='flex';
  menu.style.flexDirection='column';
  renderCtx();
}

function closeCtx(){
  document.getElementById('ctxMenu').style.display='none';
}

function setCtxTab(loc){
  ctxFilterLoc=loc;
  renderCtx();
}

function getUsedCids(){
  // Get all course IDs currently in this track (across all semesters)
  const tr=tracks[curTrack];
  const used=new Set();
  tr.sems.forEach(s=>s.cs.forEach(cid=>used.add(cid)));
  return used;
}

function renderCtx(){
  const sem=tracks[curTrack].sems[ctxSemIdx];
  const used=getUsedCids();
  const menu=document.getElementById('ctxMenu');

  // Available courses = DB courses filtered by loc, NOT in used set
  const available=Object.keys(DB).filter(k=>{
    const c=DB[k];
    if(c.l!==ctxFilterLoc && !(ctxFilterLoc==='MU' && c.l==='MU') && !(ctxFilterLoc==='TU' && c.l==='TU'))return false;
    if(c.l!==ctxFilterLoc)return false;
    if(used.has(k))return false;
    return true;
  }).sort((a,b)=>{
    const na=parseInt((DB[a].c.match(/\d+/)||['9999'])[0]);
    const nb=parseInt((DB[b].c.match(/\d+/)||['9999'])[0]);
    return na-nb;
  });

  const muActive=ctxFilterLoc==='MU'?'on':'';
  const tuActive=ctxFilterLoc==='TU'?'on-tu':'';

  let listHtml='';
  if(available.length===0){
    listHtml=`<div class="ctx-empty">ไม่มีรายวิชา${ctxFilterLoc}ที่ยังไม่ได้ลงทะเบียน</div>`;
  } else {
    // Group by category
    const groups={};
    available.forEach(k=>{
      const cat=DB[k].cat||'other';
      if(!groups[cat])groups[cat]=[];
      groups[cat].push(k);
    });
    for(const cat in groups){
      const catColor=CAT_COLORS[cat]||'#94A0AF';
      listHtml+=`<div style="padding:4px 10px 2px;font-size:.58rem;font-weight:600;color:${catColor};text-transform:uppercase;letter-spacing:.06em;margin-top:4px">${CAT_LABELS[cat]||cat}</div>`;
      groups[cat].forEach(k=>{
        const c=DB[k];
        const dotCls=c.l==='TU'?'dot-tu':'dot-mu';
        listHtml+=`<div class="ctx-item" onclick="addCourseFromCtx('${k}')">
          <span class="ctx-dot ${dotCls}"></span>
          <span class="ctx-name">${c.n}</span>
          <span style="font-family:'IBM Plex Mono';font-size:.55rem;color:var(--text-faint)">${c.c}</span>
          <span class="ctx-cr">${c.cr}</span>
        </div>`;
      });
    }
  }

  menu.innerHTML=`
    <div class="ctx-header">
      <span>เพิ่มรายวิชาใน ${sem.t}</span>
      <button class="ctx-close" onclick="closeCtx()">✕</button>
    </div>
    <div class="ctx-tabs">
      <button class="ctx-tab ${muActive}" onclick="setCtxTab('MU')">🔵 MU — มหิดล</button>
      <button class="ctx-tab ${tuActive}" onclick="setCtxTab('TU')">🟠 TU — ธรรมศาสตร์</button>
    </div>
    <input class="ctx-search" id="ctxSearch" placeholder="ค้นหา..." oninput="filterCtxList()">
    <div class="ctx-list" id="ctxList">${listHtml}</div>
  `;
}

function filterCtxList(){
  const q=(document.getElementById('ctxSearch')?.value||'').toLowerCase();
  document.querySelectorAll('.ctx-item').forEach(el=>{
    const text=el.textContent.toLowerCase();
    el.style.display=text.includes(q)?'':'none';
  });
}

function addCourseFromCtx(cid){
  const tr=tracks[curTrack];
  tr.sems[ctxSemIdx].cs.push(cid);
  movedSets[curTrack].add(cid+':'+ctxSemIdx);
  closeCtx();
  renderPlan();
  markDirty();
  const c=DB[cid];
  showUndo2(`เพิ่ม ${c?.n||cid} ใน ${tr.sems[ctxSemIdx].t}`);
}

// Close ctx menu when clicking elsewhere
document.addEventListener('click',function(e){
  const menu=document.getElementById('ctxMenu');
  if(menu.style.display!=='none' && !menu.contains(e.target)){
    closeCtx();
  }
});

// ===== DETAIL OVERLAY (full course info) =====
let detailCid=null;
let detailFromSem=null; // which semester index the detail was opened from (planner only)
let detailFromTrack=null; // which track

function openDetail(cid,fromSem,fromTrack){
  const c=DB[cid];if(!c)return;
  detailCid=cid;
  detailFromSem=(fromSem!==undefined)?fromSem:null;
  detailFromTrack=(fromTrack!==undefined)?fromTrack:null;
  document.getElementById('dName').textContent=c.n;
  document.getElementById('dNameEn').textContent=c.en?.split(';')[0]||'';
  document.getElementById('dCode').textContent=c.c;
  document.getElementById('dCr').textContent=(c.cr||'—')+' หน่วยกิต';
  const catEl=document.getElementById('dCat');
  catEl.textContent=CAT_LABELS[c.cat]||c.cat||'';
  catEl.style.background=(CAT_COLORS[c.cat]||'#94A0AF')+'18';
  catEl.style.color=CAT_COLORS[c.cat]||'#94A0AF';
  catEl.style.border='1px solid '+(CAT_COLORS[c.cat]||'#94A0AF')+'30';
  const locEl=document.getElementById('dLoc');
  locEl.textContent=c.l;
  locEl.className=c.l==='TU'?'loc-tu':'loc-mu';
  locEl.style.cssText='font-size:.58rem;font-weight:600;padding:2px 7px;border-radius:3px;'+(c.l==='TU'?'background:rgba(232,136,31,.08);color:var(--tu)':'background:rgba(43,91,138,.08);color:var(--mu)');
  document.getElementById('dTh').textContent=c.th||'ยังไม่มีคำอธิบาย';
  document.getElementById('dEn').textContent=c.en||'No description yet';
  const profBox=document.getElementById('dProfBox');
  if(c.prof){profBox.style.display='';document.getElementById('dProf').textContent=c.prof;document.getElementById('dEmail').textContent=c.email||'';}
  else{profBox.style.display='';document.getElementById('dProf').textContent='ยังไม่ระบุผู้ประสานงาน';document.getElementById('dEmail').textContent='';}
  document.getElementById('dTs').textContent=c.mod?'แก้ไขล่าสุด: '+c.mod:'ยังไม่เคยแก้ไข';

  // Show delete button when on planner page
  const delBtn=document.getElementById('dDeleteBtn');
  const onPlannerPage=document.getElementById('p-plan').classList.contains('on');

  if(detailFromSem!==null && onPlannerPage){
    // Opened with explicit semester info
    const ti=detailFromTrack!==null?detailFromTrack:curTrack;
    const tr=tracks[ti];
    const semName=tr.sems[detailFromSem]?.t||'';
    delBtn.style.display='';
    delBtn.textContent='🗑 ลบออกจาก '+semName;
    delBtn.onclick=function(){removeCourseFromPlan();};
  } else if(onPlannerPage){
    // Opened without semester info (e.g. touch) → find which semester has this course
    const tr=tracks[curTrack];
    let foundSi=null;
    for(let i=0;i<tr.sems.length;i++){
      if(tr.sems[i].cs.includes(cid)){foundSi=i;break;}
    }
    if(foundSi!==null){
      detailFromSem=foundSi;
      detailFromTrack=curTrack;
      const semName=tr.sems[foundSi]?.t||'';
      delBtn.style.display='';
      delBtn.textContent='🗑 ลบออกจาก '+semName;
      delBtn.onclick=function(){removeCourseFromPlan();};
    } else {
      delBtn.style.display='none';
    }
  } else {
    delBtn.style.display='none';
  }

  document.getElementById('detailOverlay').classList.add('open');
}
function closeDetail(){document.getElementById('detailOverlay').classList.remove('open');}

// Remove course from current plan
function doDeleteFromOverlay(btnEl){
  if(detailCid===null||detailFromSem===null)return;

  // Show hourglass loading state
  btnEl.textContent='⏳ กำลังลบ...';
  btnEl.style.background='#7F8C8D';
  btnEl.style.pointerEvents='none';

  setTimeout(()=>{
    const ti=detailFromTrack!==null?detailFromTrack:curTrack;
    const tr=tracks[ti];
    const arr=tr.sems[detailFromSem].cs;
    const idx=arr.indexOf(detailCid);
    if(idx===-1){closeDetail();return;}

    const c=DB[detailCid];
    const semName=tr.sems[detailFromSem].t;

    undoStack.push({track:ti,from:detailFromSem,to:-1,cid:detailCid,idx:idx});
    arr.splice(idx,1);
    movedSets[ti].delete(detailCid+':'+detailFromSem);

    closeDetail();
    renderPlan();

    const el=document.getElementById('undoContainer');
    el.innerHTML=`<div class="undo-bar">
      ลบ <strong>${c?.n||detailCid}</strong> ออกจาก ${semName}
      <button onclick="doUndo()" style="background:#C0392B;border-color:#C0392B">↩ Undo — กดเพื่อเอาคืน</button>
    </div>`;
    clearTimeout(window._undoTimer);
    window._undoTimer=setTimeout(()=>{el.innerHTML=''},8000);
  },300);
}

function removeCourseFromPlan(){
  if(detailCid===null||detailFromSem===null)return;
  const ti=detailFromTrack!==null?detailFromTrack:curTrack;
  const tr=tracks[ti];
  const arr=tr.sems[detailFromSem].cs;
  const idx=arr.indexOf(detailCid);
  if(idx===-1)return;

  const c=DB[detailCid];
  const semName=tr.sems[detailFromSem].t;

  // Save undo
  undoStack.push({track:ti,from:detailFromSem,to:-1,cid:detailCid,idx:idx});

  arr.splice(idx,1);
  movedSets[ti].delete(detailCid+':'+detailFromSem);

  closeDetail();
  renderPlan();
  markDirty();

  // Show undo bar
  const el=document.getElementById('undoContainer');
  el.innerHTML=`<div class="undo-bar">
    ลบ <strong>${c?.n||detailCid}</strong> ออกจาก ${semName}
    <button onclick="doUndo()">↩ Undo</button>
  </div>`;
  clearTimeout(window._undoTimer);
  window._undoTimer=setTimeout(()=>{el.innerHTML=''},5000);
}

// Override openM — when called from planner chips, pass semester info
function openM(cid,fromSem,fromTrack){openDetail(cid,fromSem,fromTrack);}

function openME(cid){
  const c=DB[cid];if(!c)return;
  editId=cid;
  closeDetail();
  document.getElementById('eN').value=c.n;
  document.getElementById('eC').value=c.c;
  document.getElementById('eCr').value=c.cr;
  document.getElementById('eCat').value=c.cat||'mu_req';
  document.getElementById('eTh').value=c.th;
  document.getElementById('eEn').value=c.en;
  document.getElementById('eProf').value=c.prof||'';
  document.getElementById('eEmail').value=c.email||'';
  document.getElementById('vMode').style.display='none';
  document.getElementById('eMode').style.display='';
  document.getElementById('modal').classList.add('open');
}
function editM(){
  closeM();
  openME(editId||detailCid);
}
function cancelE(){document.getElementById('vMode').style.display='';document.getElementById('eMode').style.display='none';}
function saveE(){
  const c=DB[editId];
  const now=new Date().toLocaleString('th-TH',{year:'numeric',month:'short',day:'numeric',hour:'2-digit',minute:'2-digit'});
  c.n=document.getElementById('eN').value;
  c.c=document.getElementById('eC').value;
  c.cr=document.getElementById('eCr').value;
  c.cat=document.getElementById('eCat').value;
  c.th=document.getElementById('eTh').value;
  c.en=document.getElementById('eEn').value;
  c.prof=document.getElementById('eProf').value;
  c.email=document.getElementById('eEmail').value;
  c.mod=now;
  closeM();
  renderPlan();
  renderReg();
  markDirty();
  showUndo2('บันทึก '+c.c+' สำเร็จ');
}
function closeM(){document.getElementById('modal').classList.remove('open');document.getElementById('eMode').style.display='none';document.getElementById('vMode').style.display='';}
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeM();closeDetail();closeSaveHTML();}});

function showUndo2(msg){
  const el=document.getElementById('undoContainer');
  el.innerHTML=`<div class="undo-bar">${msg}</div>`;
  clearTimeout(window._undoTimer2);
  window._undoTimer2=setTimeout(()=>{el.innerHTML=''},3000);
}

// ===== REGISTRY =====
let regFilter='all';
function setRegFilter(f){
  regFilter=f;
  document.querySelectorAll('[data-rf]').forEach(b=>b.classList.toggle('on',b.dataset.rf===f));
  renderReg();
}

function renderReg(){
  const q=(document.getElementById('regSearch')?.value||'').toLowerCase();
  let keys=Object.keys(DB);
  // Sort by numeric code
  keys.sort((a,b)=>{
    const na=parseInt((DB[a].c.match(/\d+/)||['9999'])[0]);
    const nb=parseInt((DB[b].c.match(/\d+/)||['9999'])[0]);
    return na-nb;
  });
  // Filter
  if(regFilter==='MU') keys=keys.filter(k=>DB[k].l==='MU');
  else if(regFilter==='TU') keys=keys.filter(k=>DB[k].l==='TU');
  else if(regFilter!=='all') keys=keys.filter(k=>DB[k].cat===regFilter);
  if(q) keys=keys.filter(k=>{const c=DB[k];return(c.c+c.n+c.th+c.en+(c.prof||'')).toLowerCase().includes(q);});

  document.getElementById('regCount').textContent=keys.length+' / '+Object.keys(DB).length+' รายวิชา';

  document.getElementById('regBody').innerHTML=keys.map(k=>{
    const c=DB[k];
    const locCls=c.l==='TU'?'loc-tu':'loc-mu';
    const catColor=CAT_COLORS[c.cat]||'#94A0AF';
    return `<tr onclick="openDetail('${k}')">
      <td style="font-family:'IBM Plex Mono';font-weight:600;font-size:.68rem;white-space:nowrap">${c.c}</td>
      <td><div style="font-weight:500">${c.n}</div><div style="font-size:.6rem;color:var(--text-dim);max-width:250px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${c.th}</div></td>
      <td><span class="loc ${locCls}" style="font-size:.55rem;font-weight:600;padding:2px 6px;border-radius:3px">${c.l}</span></td>
      <td><span class="cat-badge" style="background:${catColor}18;color:${catColor};border:1px solid ${catColor}30">${CAT_LABELS[c.cat]||''}</span></td>
      <td style="font-family:'IBM Plex Mono';text-align:center;font-size:.68rem">${c.cr}</td>
      <td style="font-size:.65rem">${c.prof||'<span style="color:var(--text-faint);font-style:italic">ยังไม่ระบุ</span>'}</td>
      <td style="font-family:'IBM Plex Mono';font-size:.58rem;color:var(--text-faint)">${c.mod||'—'}</td>
    </tr>`;
  }).join('');
}

function openRegAdd(){
  const id='new_'+Date.now();
  DB[id]={n:'',c:'',cr:'',l:'MU',cat:'mu_req',th:'',en:'',prof:'',email:'',mod:''};
  openME(id);
}

// ===== SAVE HTML =====
let _lastFileHandle=null; // remember the file handle from showSaveFilePicker

function saveHTML(){
  const now=new Date();
  const pad2=n=>String(n).padStart(2,'0');
  document.getElementById('saveFilename').value=
    'Sustainability_Planner_'+now.getFullYear()+'-'+pad2(now.getMonth()+1)+'-'+pad2(now.getDate())+'_'+pad2(now.getHours())+pad2(now.getMinutes());
  document.getElementById('saveOverlay').classList.add('open');
}
function closeSaveHTML(){document.getElementById('saveOverlay').classList.remove('open');}

function _buildSaveSource(){
  let src=null;
  try{
    const xhr=new XMLHttpRequest();
    xhr.open('GET',location.href,false);
    xhr.send();
    if(xhr.status===200||xhr.status===0) src=xhr.responseText;
  }catch(e){}
  if(!src) src='<!DOCTYPE html>\n'+document.documentElement.outerHTML;

  src=src.replace(
    /\/\*__DB_START__\*\/const DB=[\s\S]*?;\/\*__DB_END__\*\//,
    '/*__DB_START__*/const DB='+JSON.stringify(DB)+';/*__DB_END__*/'
  );
  src=src.replace(
    /\/\*__TRACKS_START__\*\/const TRACKS_INIT=[\s\S]*?;\/\*__TRACKS_END__\*\//,
    '/*__TRACKS_START__*/const TRACKS_INIT='+JSON.stringify(tracks)+';/*__TRACKS_END__*/'
  );
  return src;
}

async function doSaveHTML(){
  const suggestedName=(document.getElementById('saveFilename').value.trim()||'Sustainability_Planner')+'.html';
  const src=_buildSaveSource();
  document.getElementById('saveOverlay').classList.remove('open');

  // Try showSaveFilePicker (Chrome/Edge) — lets user pick save location
  if(window.showSaveFilePicker){
    try{
      const handle=await window.showSaveFilePicker({
        suggestedName:suggestedName,
        types:[{description:'HTML File',accept:{'text/html':['.html']}}],
      });
      const writable=await handle.createWritable();
      await writable.write(src);
      await writable.close();
      _lastFileHandle=handle;
      clearDirty();
      showUndo2('💾 บันทึกสำเร็จ → '+handle.name);
      return;
    }catch(e){
      if(e.name==='AbortError') return; // user cancelled
      console.warn('showSaveFilePicker failed, falling back:',e);
    }
  }

  // Fallback: normal download (Firefox, Safari, etc.)
  const blob=new Blob([src],{type:'text/html;charset=utf-8'});
  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob);
  a.download=suggestedName;
  a.click();
  URL.revokeObjectURL(a.href);
  clearDirty();
  showUndo2('💾 บันทึกสำเร็จ — '+suggestedName);
}

// ===== COMPARE — row-aligned 4 columns + connection lines =====
const CMP_HUES={};
let _hueIdx=0;
const HUE_PALETTE=[210,25,160,340,50,120,280,80,195,310,145,35,250,10,170,70,225,355,100,290];
function getCourseColor(cid){
  if(!CMP_HUES[cid]){CMP_HUES[cid]=HUE_PALETTE[_hueIdx%HUE_PALETTE.length];_hueIdx++;}
  return CMP_HUES[cid];
}
Object.keys(DB).forEach(k=>getCourseColor(k));

let highlightedCid=null;

// Hover timer for 2-second highlight
let _hoverTimer=null;
let _hoverCid=null;

function cmpChipHoverIn(cid,el){
  if(highlightedCid)return; // already highlighted something
  clearTimeout(_hoverTimer);
  _hoverCid=cid;
  el.style.transform='scale(1.12)';
  _hoverTimer=setTimeout(function(){
    if(_hoverCid===cid) highlightCourse(cid);
  },2000);
}
function cmpChipHoverOut(el){
  clearTimeout(_hoverTimer);
  _hoverCid=null;
  if(!highlightedCid) el.style.transform='';
}

function cmpChip(cid,extra){
  const c=DB[cid];if(!c)return'';
  const h=getCourseColor(cid);
  const code=c.c.split('/')[0].trim();
  return `<span class="cmp-chip" data-cid="${cid}" ${extra||''} onclick="openDetail('${cid}')" title="${c.n}" style="display:inline-block;padding:3px 6px;border-radius:3px;font-family:'IBM Plex Mono';font-size:.52rem;font-weight:600;cursor:pointer;background:hsl(${h},55%,90%);color:hsl(${h},60%,30%);border:1px solid hsl(${h},45%,78%);transition:all .15s;line-height:1" onmouseover="cmpChipHoverIn('${cid}',this)" onmouseout="cmpChipHoverOut(this)">${code}</span>`;
}

// Helper: sum credits for a semester
function semCredits(cs){
  let mu=0,tu=0;
  cs.forEach(cid=>{const c=DB[cid];if(!c)return;const cr=parseInt(c.cr)||0;if(c.l==='TU')tu+=cr;else mu+=cr;});
  return{mu,tu,total:mu+tu};
}

function renderCompare(){
  const allUsed=new Set();
  tracks.forEach(tr=>tr.sems.forEach(s=>s.cs.forEach(cid=>allUsed.add(cid))));
  const muCids=[...allUsed].filter(k=>DB[k]?.l==='MU').sort((a,b)=>parseInt((DB[a]?.c?.match(/\d+/)||['9999'])[0])-parseInt((DB[b]?.c?.match(/\d+/)||['9999'])[0]));
  const tuCids=[...allUsed].filter(k=>DB[k]?.l==='TU').sort((a,b)=>parseInt((DB[a]?.c?.match(/\d+/)||['9999'])[0])-parseInt((DB[b]?.c?.match(/\d+/)||['9999'])[0]));

  let html='';
  // Instruction
  html+=`<div style="margin-bottom:8px;padding:8px 14px;background:rgba(43,91,138,.04);border:1px solid var(--border);border-radius:var(--radius);font-size:.65rem;color:var(--text-dim)">💡 <strong>วางเมาส์ค้างบนรายวิชา 2 วินาที</strong> เพื่อดูเส้นเชื่อมโยงว่าวิชาเดียวกันอยู่เทอมไหนของแต่ละ track · คลิกที่ว่างเพื่อยกเลิก · แตะเพื่อดูรายละเอียด</div>`;
  // MU Legend
  html+=`<div style="margin-bottom:6px;padding:10px 14px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);box-shadow:var(--shadow)">`;
  html+=`<div style="font-size:.58rem;font-weight:600;color:var(--mu);margin-bottom:5px">🔵 รายวิชา MU — มหาวิทยาลัยมหิดล</div>`;
  html+=`<div style="display:flex;flex-wrap:wrap;gap:3px">${muCids.map(c=>cmpChip(c)).join('')}</div></div>`;
  // TU Legend
  html+=`<div style="margin-bottom:14px;padding:10px 14px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);box-shadow:var(--shadow)">`;
  html+=`<div style="font-size:.58rem;font-weight:600;color:var(--tu);margin-bottom:5px">🟠 รายวิชา TU — มหาวิทยาลัยธรรมศาสตร์</div>`;
  html+=`<div style="display:flex;flex-wrap:wrap;gap:3px">${tuCids.map(c=>cmpChip(c)).join('')}</div></div>`;

  // Table with SVG overlay
  html+=`<div style="position:relative" id="cmpTableWrap">`;
  html+=`<svg id="cmpLines" style="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:10"></svg>`;
  html+=`<div style="overflow-x:auto"><table id="cmpTable" style="width:100%;border-collapse:collapse;min-width:820px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius)">`;
  html+=`<thead><tr style="background:var(--surface2)">`;
  html+=`<th style="padding:8px 6px;font-size:.6rem;font-weight:600;color:var(--text-faint);text-align:center;border-bottom:2px solid var(--border);width:80px">ภาค</th>`;
  tracks.forEach(tr=>{html+=`<th style="padding:8px 6px;font-size:.62rem;font-weight:600;color:var(--navy);text-align:center;border-bottom:2px solid var(--border);border-left:1px solid var(--border)">${tr.label}</th>`;});
  html+=`</tr></thead><tbody>`;

  const semLabels=["ปี 1 · ภาคต้น","ปี 1 · ภาคปลาย","ปี 2 · ภาคต้น","ปี 2 · ภาคปลาย","ปี 3 · ภาคต้น","ปี 3 · ภาคปลาย","ปี 4 · ภาคต้น","ปี 4 · ภาคปลาย"];
  for(let si=0;si<8;si++){
    const rowBg=si%2?'background:rgba(43,91,138,.015)':'';
    const yearBorder=si%2===0&&si>0?'border-top:2px solid var(--border)':'';
    html+=`<tr style="${rowBg}"><td style="padding:6px;${yearBorder};border-bottom:1px solid var(--surface2);vertical-align:top;text-align:center"><div style="font-family:'IBM Plex Mono';font-size:.7rem;font-weight:700;color:var(--navy)">${si+1}</div><div style="font-size:.5rem;color:var(--text-faint);line-height:1.2">${semLabels[si]}</div></td>`;
    tracks.forEach((tr,ti)=>{
      const s=tr.sems[si];const moved=movedSets[ti];
      const lc=s.l.includes('TU')?'loc-tu':'loc-mu';
      const cr=semCredits(s.cs);
      // Credit summary line
      let crLine='<div style="font-family:\'IBM Plex Mono\';font-size:.48rem;color:var(--text-faint);margin-top:3px">';
      if(cr.total>0){
        crLine+=`<span style="font-weight:600">${cr.total} cr</span>`;
        if(cr.mu>0) crLine+=` · <span style="color:var(--mu)">MU ${cr.mu}</span>`;
        if(cr.tu>0) crLine+=` · <span style="color:var(--tu)">TU ${cr.tu}</span>`;
      } else {
        crLine+='—';
      }
      crLine+='</div>';

      html+=`<td style="padding:5px 6px;${yearBorder};border-bottom:1px solid var(--surface2);border-left:1px solid var(--border);vertical-align:top"><div style="margin-bottom:3px;display:flex;align-items:center;gap:4px"><span class="loc ${lc}" style="font-size:.48rem;padding:1px 4px;border-radius:2px">${s.l}</span></div><div style="display:flex;flex-wrap:wrap;gap:2px">`;
      if(!s.cs.length) html+=`<span style="font-size:.5rem;color:var(--text-faint);font-style:italic">—</span>`;
      s.cs.forEach(cid=>{
        const c=DB[cid];if(!c)return;
        const h=getCourseColor(cid);const code=c.c.split('/')[0].trim();
        const isMoved=moved.has(cid+':'+si);
        const bdr=isMoved?'border:1.5px solid var(--orange)':'border:1px solid hsl('+h+',45%,78%)';
        html+=`<span class="cmp-chip" data-cid="${cid}" data-track="${ti}" data-sem="${si}" onclick="openDetail('${cid}')" title="${c.n}" style="display:inline-block;padding:3px 5px;border-radius:3px;font-family:'IBM Plex Mono';font-size:.5rem;font-weight:600;cursor:pointer;background:hsl(${h},55%,90%);color:hsl(${h},60%,30%);${bdr};transition:all .15s;line-height:1" onmouseover="cmpChipHoverIn('${cid}',this)" onmouseout="cmpChipHoverOut(this)">${code}</span>`;
      });
      html+=`</div>${crLine}</td>`;
    });
    html+=`</tr>`;
  }
  html+=`</tbody></table></div></div>`;
  document.getElementById('cmpGrid').innerHTML=html;
  highlightedCid=null;
}

function highlightCourse(cid){
  if(highlightedCid===cid){highlightedCid=null;clearLines();resetChipStyles();return;}
  highlightedCid=cid;
  document.querySelectorAll('.cmp-chip').forEach(el=>{
    if(el.dataset.cid===cid){
      el.style.outline='2.5px solid var(--navy)';el.style.outlineOffset='1px';
      el.style.opacity='1';el.style.transform='scale(1.18)';el.style.zIndex='5';el.style.position='relative';
    } else {
      el.style.opacity='.2';el.style.outline='none';el.style.transform='';el.style.zIndex='';
    }
  });
  drawLines(cid);
}
function resetChipStyles(){
  document.querySelectorAll('.cmp-chip').forEach(el=>{
    el.style.opacity='';el.style.outline='none';el.style.outlineOffset='';
    el.style.transform='';el.style.zIndex='';el.style.position='';
  });
}
function clearLines(){const svg=document.getElementById('cmpLines');if(svg)svg.innerHTML='';}
function drawLines(cid){
  clearLines();
  const svg=document.getElementById('cmpLines');
  const wrap=document.getElementById('cmpTableWrap');
  if(!svg||!wrap)return;
  const wrapRect=wrap.getBoundingClientRect();
  const chips=[...document.querySelectorAll(`.cmp-chip[data-cid="${cid}"][data-track]`)];
  if(chips.length<2)return;
  const pts=chips.map(el=>{const r=el.getBoundingClientRect();return{x:r.left+r.width/2-wrapRect.left+wrap.scrollLeft,y:r.top+r.height/2-wrapRect.top+wrap.scrollTop,t:+el.dataset.track,s:+el.dataset.sem};}).sort((a,b)=>a.t-b.t||a.s-b.s);
  const h=getCourseColor(cid);const col=`hsl(${h},60%,45%)`;
  let svgContent='';
  for(let i=0;i<pts.length;i++){
    svgContent+=`<circle cx="${pts[i].x}" cy="${pts[i].y}" r="5" fill="${col}" opacity=".85"/>`;
    if(i<pts.length-1){
      const p1=pts[i],p2=pts[i+1];
      const cp1y=p1.y-(Math.abs(p2.x-p1.x)*0.15+15);
      const cp2y=p2.y-(Math.abs(p2.x-p1.x)*0.15+15);
      svgContent+=`<path d="M${p1.x},${p1.y} C${p1.x},${cp1y} ${p2.x},${cp2y} ${p2.x},${p2.y}" fill="none" stroke="${col}" stroke-width="2.5" stroke-dasharray="5,3" opacity=".6"/>`;
    }
  }
  svg.innerHTML=svgContent;
  const table=document.getElementById('cmpTable');
  if(table){svg.style.width=Math.max(table.scrollWidth,wrap.offsetWidth)+'px';svg.style.height=Math.max(table.scrollHeight,wrap.offsetHeight)+'px';}
}
document.addEventListener('click',function(e){
  if(highlightedCid&&!e.target.closest('.cmp-chip')){highlightedCid=null;clearLines();resetChipStyles();}
});

// Touch long-press on compare chips → highlight connection lines
let cmpTouchTimer=null;
let cmpTouchMoved=false;
let cmpTouchCid=null;
document.addEventListener('touchstart',function(e){
  const chip=e.target.closest('.cmp-chip');
  if(!chip||!chip.dataset.cid)return;
  cmpTouchMoved=false;
  cmpTouchCid=chip.dataset.cid;
  cmpTouchTimer=setTimeout(function(){
    if(!cmpTouchMoved){
      e.preventDefault();
      highlightCourse(cmpTouchCid);
      chip._longPressed=true;
      setTimeout(()=>{chip._longPressed=false;},400);
    }
  },500);
},{passive:false});
document.addEventListener('touchmove',function(){
  cmpTouchMoved=true;
  clearTimeout(cmpTouchTimer);
},{passive:true});
document.addEventListener('touchend',function(){
  clearTimeout(cmpTouchTimer);
},{passive:true});

// Patch openDetail to skip if long-pressed
const _origOpenDetail=openDetail;
openDetail=function(cid){
  const chips=document.querySelectorAll(`.cmp-chip[data-cid="${cid}"]`);
  for(const ch of chips){if(ch._longPressed)return;}
  _origOpenDetail(cid);
};

// ===== ACTION, TIMELINE, TASKS =====
function renderAction(){
  document.getElementById('apCards').innerHTML=`
    <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:14px;box-shadow:var(--shadow)"><div style="font-weight:600;font-size:.8rem;margin-bottom:4px">📄 เอกสารหลักสูตร</div><div style="font-size:.7rem;color:var(--text-dim)">Degree Profile, มม.2, มม.3, มม.4</div><span style="display:inline-block;font-size:.56rem;font-weight:600;padding:2px 7px;border-radius:3px;margin-top:6px;background:rgba(220,60,60,.06);color:#C0392B;border:1px solid rgba(220,60,60,.12)">เร่งด่วน</span></div>
    <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:14px;box-shadow:var(--shadow)"><div style="font-weight:600;font-size:.8rem;margin-bottom:4px">🏛️ กระบวนการอนุมัติ</div><div style="font-size:.7rem;color:var(--text-dim)">20 ขั้นตอนจากคณะ → สภา มม.</div><span style="display:inline-block;font-size:.56rem;font-weight:600;padding:2px 7px;border-radius:3px;margin-top:6px;background:rgba(232,136,31,.06);color:#D4770F;border:1px solid rgba(232,136,31,.12)">รอดำเนินการ</span></div>
    <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:14px;box-shadow:var(--shadow)"><div style="font-weight:600;font-size:.8rem;margin-bottom:4px">📚 พัฒนาวิชา SDGs</div><div style="font-size:.7rem;color:var(--text-dim)">มีร่าง 4 วิชา ต้องทำเพิ่ม 6+</div><span style="display:inline-block;font-size:.56rem;font-weight:600;padding:2px 7px;border-radius:3px;margin-top:6px;background:rgba(232,136,31,.06);color:#D4770F;border:1px solid rgba(232,136,31,.12)">กำลังทำ</span></div>
    <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:14px;box-shadow:var(--shadow)"><div style="font-weight:600;font-size:.8rem;margin-bottom:4px">🤝 ประสานงาน MU–TU</div><div style="font-size:.7rem;color:var(--text-dim)">ยืนยันแผน 2,3 เทียบโอน cr</div><span style="display:inline-block;font-size:.56rem;font-weight:600;padding:2px 7px;border-radius:3px;margin-top:6px;background:rgba(220,60,60,.06);color:#C0392B;border:1px solid rgba(220,60,60,.12)">ต้องตกลง</span></div>
    <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:14px;box-shadow:var(--shadow)"><div style="font-weight:600;font-size:.8rem;margin-bottom:4px">👨‍🏫 บุคลากร</div><div style="font-size:.7rem;color:var(--text-dim)">อจ.5 คน ✓ ต้องหาเพิ่ม</div><span style="display:inline-block;font-size:.56rem;font-weight:600;padding:2px 7px;border-radius:3px;margin-top:6px;background:rgba(232,136,31,.06);color:#D4770F;border:1px solid rgba(232,136,31,.12)">บางส่วนเสร็จ</span></div>
    <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:14px;box-shadow:var(--shadow)"><div style="font-weight:600;font-size:.8rem;margin-bottom:4px">🌱 เตรียมความพร้อม</div><div style="font-size:.7rem;color:var(--text-dim)">Zero Waste, OECMs, D&I</div><span style="display:inline-block;font-size:.56rem;font-weight:600;padding:2px 7px;border-radius:3px;margin-top:6px;background:rgba(148,163,184,.06);color:#5A6B82;border:1px solid rgba(148,163,184,.12)">รอเริ่ม</span></div>
  `;
}

function renderTimeline(){
  const steps=[
    ["ส.ค. 2568","❶ เสนอขออนุมัติเปิดหลักสูตร","active"],
    ["ส.ค.–ก.ย.","❷ แต่งตั้งคณะกรรมการ",""],
    ["ต.ค.","❸ กลั่นกรองระดับคณะ",""],
    ["พ.ย.","❹ กลั่นกรองระดับ มม.",""],
    ["29 ธ.ค.","❺ กก.บริหาร ม.มหิดล",""],
    ["YEAR","ปี 2569",""],
    ["14 ม.ค.","❻ กก.ประจำ ม.มหิดล",""],
    ["16 ม.ค.","❼ สภา มม. — อนุมัติเปิดหลักสูตร",""],
    ["ม.ค.–มี.ค.","❽ จัดทำ มม.2 มม.3 มม.4",""],
    ["23 มี.ค.","❾ ส่งเล่ม มม.2 + รายชื่อผู้ทรงคุณวุฒิ",""],
    ["7 พ.ค.","❿ กลั่นกรอง มม.2 ระดับ มม.",""],
    ["10 มิ.ย.","⓫ กก.ประจำ ม.มหิดล",""],
    ["15 ก.ค.","⓬ สภา มม. — อนุมัติฉบับสมบูรณ์",""],
    ["ส.ค.–ก.ย.","⓭ ประกาศค่าธรรมเนียม + TCAS 2570",""],
    ["YEAR","ปี 2570",""],
    ["มิ.ย. 2570","⓮ เปิดเทอม — เริ่มหลักสูตร",""],
  ];
  let html='<div style="padding-left:24px;position:relative;margin-top:12px"><div style="position:absolute;left:7px;top:4px;bottom:4px;width:2px;background:var(--border)"></div>';
  steps.forEach(s=>{
    if(s[0]==='YEAR'){html+=`<div style="font-family:IBM Plex Mono;font-size:.64rem;font-weight:600;color:var(--navy);padding:3px 9px;background:rgba(43,91,138,.05);border-radius:4px;display:inline-block;margin:10px 0 6px">${s[1]}</div>`;return;}
    const dc=s[2]==='active'?'background:var(--orange);border-color:var(--orange)':'';
    html+=`<div style="position:relative;margin-bottom:8px;padding:8px 12px;background:var(--surface);border:1px solid var(--border);border-radius:6px;font-size:.72rem;box-shadow:var(--shadow)">
      <div style="position:absolute;left:-20px;top:12px;width:9px;height:9px;border-radius:50%;border:2px solid var(--border);background:var(--bg);${dc}"></div>
      <div style="font-family:IBM Plex Mono;font-size:.6rem;color:var(--orange);font-weight:500">${s[0]}</div>
      <div style="font-weight:600;color:var(--navy)">${s[1]}</div>
    </div>`;
  });
  html+='</div>';
  document.getElementById('tlContent').innerHTML=html;
}

function renderTasks(){
  document.getElementById('taskBoard').innerHTML=`
    <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow)">
      <div style="padding:8px 12px;background:var(--surface2);border-bottom:1px solid var(--border);font-size:.75rem;font-weight:600">📄 เอกสาร</div>
      ${['Degree Profile (MU-CUR 01)|ประธาน+อจ.5คน|ส.ค.2568','มม.2 มม.3 มม.4|กก.พัฒนาหลักสูตร|23มี.ค.2569','มคอ.2 TU ตรวจสอบ|ทีมTU+ประธาน|ก่อนมม.2','Course Description ทุกวิชา|อจ.ผู้สอน|พร้อมมม.2'].map(x=>{const[t,o,d]=x.split('|');return`<div style="padding:8px 12px;border-bottom:1px solid var(--surface2);font-size:.7rem"><div style="font-weight:500">${t}</div><div style="font-size:.62rem;color:var(--text-dim)">${o}</div><div style="font-family:IBM Plex Mono;font-size:.58rem;color:var(--text-faint)">⏰ ${d}</div></div>`;}).join('')}
    </div>
    <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow)">
      <div style="padding:8px 12px;background:var(--surface2);border-bottom:1px solid var(--border);font-size:.75rem;font-weight:600">📚 รายวิชา</div>
      ${['SDG7 Clean Energy|อ.ธันฐภัทร์|✅ร่างแล้ว','SDG9 Industry|อ.สุทธิชัย+ทวีชัย|✅ร่างแล้ว','SDG11 Cities|อ.ภควัต|✅ร่างแล้ว','SDG15 Life on Land|อ.สาโรจน์|✅ร่างแล้ว','A อาหาร B พลังงาน C สิ่งแวดล้อม|ต้องกำหนด|❌ต้องทำ'].map(x=>{const[t,o,d]=x.split('|');return`<div style="padding:8px 12px;border-bottom:1px solid var(--surface2);font-size:.7rem"><div style="font-weight:500">${t}</div><div style="font-size:.62rem;color:var(--text-dim)">${o}</div><div style="font-family:IBM Plex Mono;font-size:.58rem;color:var(--text-faint)">${d}</div></div>`;}).join('')}
    </div>
    <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow)">
      <div style="padding:8px 12px;background:var(--surface2);border-bottom:1px solid var(--border);font-size:.75rem;font-weight:600">🤝 ประสาน</div>
      ${['ยืนยันแผน1,2,3กับTU|ประธาน+TU|ก่อนมม.2','ตกลงcr รวม126vs150|ประธาน+TU|ก่อนDegreeProfile','เทียบโอนcrMU↔TU|งานการศึกษา|ก่อนมม.2','แต่งตั้งกก.พัฒนา|คณบดี|ส.ค.2568','ค่าธรรมเนียม|การเงิน|หลังสภาอนุมัติ','TCAS2570|ฝ่ายรับเข้า|ปลาย2569'].map(x=>{const[t,o,d]=x.split('|');return`<div style="padding:8px 12px;border-bottom:1px solid var(--surface2);font-size:.7rem"><div style="font-weight:500">${t}</div><div style="font-size:.62rem;color:var(--text-dim)">${o}</div><div style="font-family:IBM Plex Mono;font-size:.58rem;color:var(--text-faint)">⏰ ${d}</div></div>`;}).join('')}
    </div>
  `;
}

// ===== INIT =====
renderTabs();
renderPlan();
