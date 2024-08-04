import React from "react";
import Mainlayouts from "../../layouts/Mainlayouts";

import LinkedInIcon from "../../assets/images/linkedin.svg";
import DribbbleIcon from "../../assets/images/dribbble.svg";
import MediumIcon from "../../assets/images/medium.svg";

const ProjectKitabisa = () => {
  return (
    <>
      <Mainlayouts>
        <div className="flex flex-col gap-12">
          <div className="container md:mx-auto md:px-40 flex flex-row gap-2">
            <div className="breadcrumb">Project</div>
            <div className="breadcrumb">&gt;</div>
            <div className="breadcrumb breadcrumb-active">
              UI/UX Case Study : Revamp Menu Kabar Terbaru Kitabisa.com
            </div>
          </div>
          <div className="banner-casestudy py-10 bg-[#1DBAF4]">
            <div className="container md:px-40 flex flex-col">
              <h1 className="title-detail-project text-center text-white">
                KITABISA
              </h1>
              <div className="img-full flex -mt-28">
                <img
                  src="/kitabisa_assets/banner-bgwhite.jpg"
                  alt="portfolio5"
                  className="opacity-[0.9]"
                />
              </div>
              <div className="flex flex-row mt-4 h-fit w-full">
                <div className="flex w-5/12 flex-col gap-4">
                  <div className="flex flex-col w-full">
                    <p className="text-[#D1FEFE] font-medium">Type</p>
                    <p className="text-white font-medium">Intern</p>
                  </div>
                  <div className="flex flex-col w-full">
                    <p className="text-[#D1FEFE] font-medium">Role</p>
                    <p className="text-white font-medium">
                      Research, Wireframing, UI Design, Prototyping, Usability
                      Testing.
                    </p>
                  </div>
                  <div className="flex flex-col w-full">
                    <p className="text-[#D1FEFE] font-medium">Platform</p>
                    <p className="text-white font-medium">Mobile</p>
                  </div>
                  <div className="flex flex-col w-full">
                    <p className="text-[#D1FEFE] font-medium">Tools</p>
                    <p className="text-white font-medium">
                      Figma, Figjam, Spreadsheet, Docs, Google Meet
                    </p>
                  </div>
                </div>
                <div className="flex flex-col w-full gap-0 justify-between items-end">
                  <h1 className="text-5xl font-medium text-white leading-[56px]">
                    UI/UX Case Study : Menu Kabar Terbaru Kitabisa.com
                  </h1>
                  <a
                    href="https://www.figma.com/proto/slj591nlcut152rAf9b5sb/KLP-11---SVI---UIX16?page-id=132%3A478&node-id=140-623&viewport=600%2C167%2C0.07&t=HyHwBcLZREjBhrQS-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=140%3A623&show-proto-sidebar=1"
                    className="py-4 px-6 bg-white text-[#1DBAF4] w-fit font-medium text-lg"
                    target="_blank"
                  >
                    Explore Prototype
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="container md:mx-auto md:px-40 desc-detail-project">
            <h2 className="subtitle w-full md:w-5/12">Tentang Project</h2>
            <p className="desc w-full">
              Halo semuanya!! pada kesempatan kali ini saya akan membagikan
              proses saya dalam mendesign menu kabar terbaru di aplikasi
              Kitabisa. Enjoy it :) Sebelum lanjut ketahap selanjutnya, saya mau
              disclaimer dulu, kalau project yang saya buat merupakan peserta
              dari program Skilvul Virtual Intership, dimana challange partner
              yang saya pilih yaitu Kitabisa sebagai project saya kali ini.
            </p>
          </div>
          <div className="container md:mx-auto md:px-40 desc-detail-project">
            <h2 className="subtitle w-full md:w-5/12">Tentang Kitabisa</h2>
            <p className="desc w-full">
              <span className="font-bold">
                Kitabisa merupakan platform galang dana dan donasi di
                indonesia&nbsp;
              </span>
              yang berdiri pada tahun 2013. Dengan aplikasi ini kita dapat
              melakukan penggalangan dana untuk berbagai tujuan, misal untuk
              membantu pengobatan seseorang, bencana alam, tenaga medis,
              pendidikan, dll. <br></br>
              <br></br>
              Dalam menyelesaikan project challenge dari Kitabisa, saya{" "}
              <span className="font-bold">
                berkolaborasi dengan 2 anggota tim
              </span>{" "}
              saya yaitu Yusril dan Vanika Gusmawti untuk menemukan masalah dan
              mencari ide solusi.<br></br>
            </p>
          </div>
          <div className="container md:mx-auto md:px-40 img-medium">
            <img
              src="https://kitabisa.com/images/about-us/stock4.svg"
              alt="image"
              className="w-full h-auto"
            />
          </div>
          <div className="container md:mx-auto md:px-40 desc-detail-project">
            <h2 className="subtitle w-full md:w-5/12">Permasalahan…</h2>
            <p className="desc w-full">
              Dari brief yang di berikan oleh Kitabisa, kami diminta bagaimana
              <span className="font-bold">
                &nbsp;menampilkan halaman kabar terbaru kepada donatur sehingga
                secara experience mereka terasa lebih menarik secara emosional
                dan meningkatkan donatur agar mereka mau berdonasi lagi.
              </span>
            </p>
          </div>
          <div className="container md:mx-auto md:px-40 desc-detail-project">
            <h2 className="subtitle w-full md:w-5/12">Tujuan Project</h2>
            <p className="desc w-full">
              Berdasarkan dari problem yang kami dapatkan, maka ada beberapa
              goals yang ingin tim kami capai, yaitu :
            </p>
          </div>
          <div className="container md:mx-auto md:px-40 img-medium">
            <img
              src="/kitabisa_assets/objective.svg"
              alt="image"
              className="w-full h-auto"
            />
          </div>
          <div className="container md:mx-auto md:px-40 desc-detail-project">
            <h2 className="subtitle w-full md:w-5/12">Design Process</h2>
            <p className="desc w-full">
              Dalam memudahkan menyelesaikan challenge ini kami menggunakan{" "}
              <span className="font-bold">
                Metode Design Thingking sebagai pendekatan design process
              </span>{" "}
              yang kami lakukan, berikut beberapa tahapan yang di lakukan pada
              design thingking :
            </p>
          </div>
          <div className="container md:mx-auto md:px-40 img-medium">
            <img
              src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*fNnmG1ODOyyl0nzOq4ddyA.png"
              alt="image"
              className="w-full h-auto"
            />
          </div>
          <div className="container md:mx-auto md:px-40 desc-detail-project">
            <h2 className="subtitle w-full md:w-5/12">1. Emphatize</h2>
            <p className="desc w-full">
              Tahap pertama yang kami lakukan yaitu Emphatize, dimana disini
              kita mencari masalah yang dijumpai oleh pengguna pada aplikasi
              Kitabisa dengan{" "}
              <span className="font-bold">metode Secondary Research</span>.
              Metode Secondary Research sendiri yaitu metode riset yang
              dilakukan dengan{" "}
              <span className="font-bold">
                mengumpulkan dan menganalisis data
              </span>{" "}
              dari informasi yang ditemukan, seperti{" "}
              <span className="font-bold">data analitik dari artikel</span>,
              melakukan <span className="font-bold">analisis kompetitor</span>,
              mencari <span className="font-bold">referensi jurnal</span>, dan
              lain-lain.
            </p>
          </div>
          <div className="container md:mx-auto md:px-40 desc-detail-project">
            <h2 className="subtitle w-full md:w-5/12">2. Define</h2>
            <p className="desc w-full">
              Tahap selanjutnya yaitu tahap Define, pada tahap ini kita
              <span className="font-bold">mengumpulkan permasalahan</span> yang
              sudah kita temui di tahap sebelumnya kedalam{" "}
              <span className="font-bold">Pain Point</span>, Pain Point sendiri
              merupakan masalah-masalah yang sering ditemukan oleh pengguna dari
              sebuah produk yang digunakan, ada beberapa point yang kita
              dapatkan.
            </p>
          </div>
          <div className="container md:mx-auto md:px-40 img-medium">
            <img
              src="/kitabisa_assets/painpoint.svg"
              alt="image"
              className="w-full h-auto"
            />
          </div>
          <div className="container md:mx-auto md:px-40 desc-detail-project">
            <h2 className="subtitle w-full md:w-5/12">HMW (How Might We)</h2>
            <p className="desc w-full">
              Dari beberapa pain point pada card diatas, kita akan{" "}
              <span className="font-bold">mencari sebanyak mungkin ide</span>{" "}
              dengan metode{" "}
              <span className="font-bold">How Might We (HMW)</span>. Dengan
              metode ini kita bisa menggali sebanyak mungkin ide solusi dari
              suatu permasalah atau tantangan, singkatnya How Might We itu
              adalah “Bagaimana Kita”. Dengan ini kita bisa memilih HMW yang
              mana mau kita kembangkan, dengan hasil voting maka HMW yang kita
              pilih adalah<br></br>
              <br></br>
              <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                <li>
                  <span className="font-bold">Memudahkan donatur</span> dalam
                  melakukan donasi.
                </li>
                <li>
                  {" "}
                  <span className="font-bold">
                    Meningkatkan emosional donatur{" "}
                  </span>
                  saat berdonasi agar donatur{" "}
                  <span className="font-bold">mau berdonasi lagi.</span>
                </li>
              </ul>
            </p>
          </div>
          <div className="container md:mx-auto md:px-40 img-medium">
            <img
              src="/kitabisa_assets/hmw.svg"
              alt="image"
              className="w-full h-auto"
            />
          </div>
          <div className="container md:mx-auto md:px-40 img-medium">
            <img
              src="/kitabisa_assets/hmwdetail.svg"
              alt="image"
              className="w-full h-auto"
            />
          </div>
          <div className="container md:mx-auto md:px-40 desc-detail-project">
            <h2 className="subtitle w-full md:w-5/12">3. Ideate</h2>
            <div className="desc w-full">
              Setelah kami menentukan HMW kami akan menjadi lebih mudah dan
              lebih spesifik dalam mengembangkan ide solusi dari sebuah masalah,
              berikut ide solusi yang kami temukan :
            </div>
          </div>
          <div className="container md:mx-auto md:px-40 img-medium">
            <img
              src="/kitabisa_assets/solutionidea.svg"
              alt="image"
              className="w-full h-auto"
            />
          </div>
          <div className="container md:mx-auto md:px-40 desc-detail-project">
            <h2 className="subtitle w-full md:w-5/12">Affinity Diagram</h2>
            <p className="desc w-full">
              Selanjutnya{" "}
              <span className="font-bold">
                ide-ide tersebut kita kelompokan
              </span>{" "}
              berdasarkan{" "}
              <span className="font-bold">kategori dan fungsinya</span>{" "}
              masing-masing pada Affinity Diagram.
            </p>
          </div>
          <div className="container md:mx-auto md:px-40 img-medium">
            <img
              src="/kitabisa_assets/affinitydiagram.svg"
              alt="image"
              className="w-full h-auto"
            />
          </div>
          <div className="container md:mx-auto md:px-40 desc-detail-project">
            <h2 className="subtitle w-full md:w-5/12">Prioritization Idea</h2>
            <p className="desc w-full">
              Tahap selanjutnya yaitu Prioritization Idea, pada tahap ini kita{" "}
              <span className="font-bold">
                mempersempit lagi ide-ide yang sudah ditemukan.
              </span>{" "}
              Disini kita{" "}
              <span className="font-bold">temukan solusi dan fitur</span> apa
              saja yang harus kita{" "}
              <span className="font-bold">kembangkan terlebih dahulu,</span>{" "}
              dengan{" "}
              <span className="font-bold">
                fokus parameter User Value yang tinggi
              </span>{" "}
              dan <span className="font-bold">Effort yang rendah </span> untuk
              pengerjaannya.
            </p>
          </div>
          <div className="container md:mx-auto md:px-40 img-medium">
            <img
              src="/kitabisa_assets/PrioritizationIdea.svg"
              alt="image"
              className="w-full h-auto"
            />
          </div>
          <div className="container md:mx-auto md:px-40 img-medium">
            <img
              src="/kitabisa_assets/yesdoit.svg"
              alt="image"
              className="w-full h-auto"
            />
          </div>
          <div className="container md:mx-auto md:px-40 desc-detail-project">
            <h2 className="subtitle w-full md:w-5/12">Crazy 8's</h2>
            <p className="desc w-full">
              Setelah itu, kami setiap anggota tim akan melakukan{" "}
              <span className="font-bold">brainstorming ide design</span>{" "}
              menggunakan <span className="font-bold">metode Crazy 8’s</span>{" "}
              yang nanti selanjutnya akan dikembangkan lebih detail pada tahap
              Wireframing, Crazy 8’s sendiri merupakan metode design dengan cara
              kita melipat kertas menjadi 8 bagian, lalu kita akan mendesign
              screen berdasarkan ide-ide sebelumnya ditemukan selama 8 menit.
              Dengan metode ini kita dapat jauh lebih cepat, karena kita bisa
              mencoba alternatif desain atau layout dalam waktu yang relatif
              singkat.
            </p>
          </div>
          <div className="container md:mx-auto md:px-40 img-medium">
            <img
              src="/kitabisa_assets/crazy8's.svg"
              alt="image"
              className="w-full h-auto"
            />
          </div>
          <div className="container md:mx-auto md:px-40 desc-detail-project">
            <h2 className="subtitle w-full md:w-5/12">User Flow</h2>
            <p className="desc w-full">
              User Flow adalah kumpulan langkah-langkah yang harus dilakukan
              oleh pengguna saat menggunakan produk untuk menyelesaikan tugas
              tertentu. Pada bagian ini kami berfokus bagaimana agar{" "}
              <span className="font-bold">
                pengguna dapat dengan mudah mengakses halaman kabar terbaru.
              </span>{" "}
              Dari User flow yang sudah kami rancang, kami melakukan improve
              agar{" "}
              <span className="font-bold">
                mempersingkat flow user dalam mengakses halaman kabar terbaru
              </span>{" "}
              dengan cara
              <span className="font-bold">
                membuat section kabar terbaru di halaman homepage,
              </span>{" "}
              nantinya di section ini akan menampilkan kabar terbaru berdasarkan
              campaign yang sudah pengguna donasikan.
            </p>
          </div>
          <div className="container md:mx-auto md:px-40 img-medium">
            <img
              src="/kitabisa_assets/userflow.svg"
              alt="image"
              className="w-full h-auto"
            />
          </div>
          <div className="container md:mx-auto md:px-40 desc-detail-project">
            <h2 className="subtitle w-full md:w-5/12">Wireframe</h2>
            <p className="desc w-full">
              Wireframe adalah kerangka dari suatu design yang berisi
              informasi-informasi penting yang akan ditampilkan pada suatu
              halaman. Pada tahap ini kami membuat wireframe dari ide-ide yang
              sudah kami temukan sebelumnya. Dengan wireframe ini kita bisa{" "}
              <span className="font-bold">
                menentukan layout dan struktur dari suatu halaman,
              </span>{" "}
              tanpa harus memikirkan desain visualnya terlebih dahulu.
            </p>
          </div>
          <div className="container md:mx-auto md:px-40 img-medium">
            <img
              src="/kitabisa_assets/wireframe.svg"
              alt="image"
              className="w-full h-auto"
            />
          </div>
          <div className="container md:mx-auto md:px-40 desc-detail-project">
            <h2 className="subtitle w-full md:w-5/12">High Fidelity</h2>
            <p className="desc w-full">
              High Fidelity adalah tahap dimana kita membuat design yang sudah
              kita buat sebelumnya menjadi{" "}
              <span className="font-bold">
                lebih detail dan lebih realistis.
              </span>
              Pada tahap ini kita akan{" "}
              <span className="font-bold">
                menambahkan warna, icon, dan font yang sesuai dengan brand
                Kitabisa.
              </span>
            </p>
          </div>
          <div className="container md:mx-auto md:px-40 img-medium">
            <img
              src="/kitabisa_assets/hifi.svg"
              alt="image"
              className="w-full h-auto"
            />
          </div>
          <div className="container md:mx-auto md:px-40 desc-detail-project">
            <h2 className="subtitle w-full md:w-5/12">5. Testing</h2>
            <p className="desc w-full">
              Pada tahap ini kita akan melakukan proses validasi ide dari yang
              sudah kami buat, disini kami akan membagi kan prototype yang sudah
              saya buat yang nantinya akan langsung di coba oleh user. Untuk{" "}
              <span className="font-bold">
                metode testing yang kami gunakan yaitu metode In-Depth Interview
                dan Usability Testing
              </span>{" "}
              dengan hasil dari{" "}
              <span className="font-bold">
                Single Ease Question adalah 6/7,
              </span>{" "}
              yang artinya prototype yang sudah dibuat sudah
              <span className="font-bold">
                menyelesaikan dari permasalah yang kita temui.
              </span>
            </p>
          </div>
          <div className="container md:mx-auto md:px-40 desc-detail-project">
            <h2 className="subtitle w-full md:w-5/12">Kesimpulan</h2>
            <p className="desc w-full">
              Dalam case study ini tim kami mencoba untuk menjawab permasalahan
              yang sudah di jabarkan sebelumnya, tentu baik dari sisi UX, UI,
              dan tulisan yang dibuat masih banyak kekurangan dan masih bisa
              untuk di kembangkan lagi. Sekian studi kasus dari saya, semoga di
              studi kasus ini bisa menginspirasi teman-teman semua. Terimakasih
              sudah mau mampir dan membaca tulisan saya.
            </p>
          </div>
        </div>

        <div className="flex pt-10 pb-24 md:pb-32 px-10 justify-between items-center w-full bg-black mt-20">
          <div className="footer-logo">EGIGHANIYYU</div>
          <div className="flex items-center gap-8">
            <a href="https://www.linkedin.com/in/egighaniyyu/" target="_blank">
              <img
                src={LinkedInIcon}
                alt="linkedin"
                className="w-7 h-7 md:w-10 md:h-10"
              />
            </a>
            <a href="https://dribbble.com/egighaniyyu" target="_blank">
              <img
                src={DribbbleIcon}
                alt="dribbble"
                className="w-7 h-7 md:w-10 md:h-10"
              />
            </a>
            <a href="https://medium.com/@egighaniyyu" target="_blank">
              <img
                src={MediumIcon}
                alt="medium"
                className="w-7 h-7 md:w-10 md:h-10"
              />
            </a>
          </div>
        </div>
      </Mainlayouts>
    </>
  );
};

export default ProjectKitabisa;
