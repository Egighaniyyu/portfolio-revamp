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
              UI/UX Case Study : Menu Kabar Terbaru Kitabisa.com
            </div>
          </div>
          <div className="container md:mx-auto md:px-40 title-detail-project">
            UI/UX Case Study : Menu Kabar Terbaru Kitabisa.com
          </div>
          <div className="img-full">
            <img src="/kitabisa_assets/banner.svg" alt="portfolio5" />
          </div>
          <div className="container md:mx-auto md:px-40 desc-detail-project">
            <div className="subtitle w-full md:w-5/12">About the Project</div>
            <div className="desc w-full">
              Halo semuanya!! pada kesempatan kali ini saya akan membagikan
              proses saya dalam mendesign menu kabar terbaru di aplikasi
              Kitabisa. Enjoy it :) Sebelum lanjut ketahap selanjutnya, saya mau
              disclaimer dulu, kalau project yang saya buat merupakan peserta
              dari program Skilvul Virtual Intership, dimana challange partner
              yang saya pilih yaitu Kitabisa sebagai project saya kali ini.
            </div>
          </div>
          <div className="container md:mx-auto md:px-40 desc-detail-project">
            <div className="subtitle w-full md:w-5/12">Tentang Kitabisa</div>
            <div className="desc w-full">
              Kitabisa merupakan platform galang dana dan donasi di indonesia
              yang berdiri pada tahun 2013. Dengan aplikasi ini kita dapat
              melakukan penggalangan dana untuk berbagai tujuan, misal untuk
              membantu pengobatan seseorang, bencana alam, tenaga medis,
              pendidikan, dll
            </div>
          </div>
          <div className="container md:mx-auto md:px-40 img-medium">
            <img
              src="https://kitabisa.com/images/about-us/stock4.svg"
              alt="image"
              className="w-full h-auto"
            />
          </div>
          <div className="container md:mx-auto md:px-40 desc-detail-project">
            <div className="subtitle w-full md:w-5/12">Problem…</div>
            <div className="desc w-full">
              Dari brief yang di berikan oleh Kitabisa, kami diminta bagaimana
              menampilkan halaman kabar terbaru kepada donatur sehingga secara
              experience mereka terasa lebih menarik secara emosional dan
              meningkatkan donatur agar mereka mau berdonasi lagi.
            </div>
          </div>
          <div className="container md:mx-auto md:px-40 desc-detail-project">
            <div className="subtitle w-full md:w-5/12">Objective</div>
            <div className="desc w-full">
              Berdasarkan dari problem yang kami dapatkan, maka ada beberapa
              goals yang ingin tim kami capai, yaitu :
            </div>
          </div>
          <div className="container md:mx-auto md:px-40 img-medium">
            <img
              src="/kitabisa_assets/objective.svg"
              alt="image"
              className="w-full h-auto"
            />
          </div>
          <div className="container md:mx-auto md:px-40 desc-detail-project">
            <div className="subtitle w-full md:w-5/12">My Role</div>
            <div className="desc w-full">
              Dalam menyelesaikan project challenge dari Kitabisa, saya
              berkolaborasi dengan 2 anggota tim saya yaitu Yusril dan Vanika
              Gusmawti , di tim ini saya bertanggung jawab untuk :
              <ol>
                <li>
                  Bersama-sama brainstorming untuk menemukan masalah dan mencari
                  ide solusi.
                </li>
                <li> Merancang UI Design yang user friendly.</li>
                <li> User research dan usability testing.</li>
              </ol>
            </div>
          </div>
          <div className="container md:mx-auto md:px-40 desc-detail-project">
            <div className="subtitle w-full md:w-5/12">Design Process</div>
            <div className="desc w-full">
              Dalam memudahkan menyelesaikan challenge ini kami menggunakan
              Metode Design Thingking sebagai pendekatan design process yang
              kami lakukan, berikut beberapa tahapan yang di lakukan pada design
              thingking :
            </div>
          </div>
          <div className="container md:mx-auto md:px-40 img-medium">
            <img
              src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*fNnmG1ODOyyl0nzOq4ddyA.png"
              alt="image"
              className="w-full h-auto"
            />
          </div>
          <div className="container md:mx-auto md:px-40 desc-detail-project">
            <div className="subtitle w-full md:w-5/12">1. Emphatize</div>
            <div className="desc w-full">
              Tahap pertama yang kami lakukan yaitu Emphatize, dimana disini
              kita mencari masalah yang dijumpai oleh pengguna pada aplikasi
              Kitabisa dengan metode Secondary Research. Metode Secondary
              Research sendiri yaitu metode riset yang dilakukan dengan
              mengumpulkan dan menganalisis data dari informasi yang ditemukan,
              seperti data analitik dari artikel, melakukan analisis kompetitor,
              mencari referensi jurnal, dan lain-lain.
            </div>
          </div>
          <div className="container md:mx-auto md:px-40 desc-detail-project">
            <div className="subtitle w-full md:w-5/12">2. Define</div>
            <div className="desc w-full">
              Tahap selanjutnya yaitu tahap Define, pada tahap ini kita
              mengumpulkan permasalahan yang sudah kita temui di tahap
              sebelumnya kedalam Pain Point, Pain Point sendiri merupakan
              masalah-masalah yang sering ditemukan oleh pengguna dari sebuah
              produk yang digunakan, ada beberapa point yang kita dapatkan.
            </div>
          </div>
          <div className="container md:mx-auto md:px-40 img-medium">
            <img
              src="/kitabisa_assets/painpoint.svg"
              alt="image"
              className="w-full h-auto"
            />
          </div>
          <div className="container md:mx-auto md:px-40 desc-detail-project">
            <div className="subtitle w-full md:w-5/12">HMW (How Might We)</div>
            <div className="desc w-full">
              Dari beberapa pain point tersebut kita akan mencari sebanyak
              mungkin ide dengan metode How Might We (HMW). Dengan metode ini
              kita bisa menggali sebanyak mungkin ide solusi dari suatu
              permasalah atau tantangan, singkatnya How Might We itu adalah
              “Bagaimana Kita”. Dengan ini kita bisa memilih HMW yang mana mau
              kita kembangkan, dengan hasil voting maka HMW yang kita pilih
              adalah
              <ol>
                <li>Memudahkan donatur dalam melakukan donasi.</li>
                <li>
                  {" "}
                  Meningkatkan emosional donatur saat berdonasi agar donatur mau
                  berdonasi lagi.
                </li>
              </ol>
            </div>
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
            <div className="subtitle w-full md:w-5/12">3. Ideate</div>
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
            <div className="subtitle w-full md:w-5/12">Affinity Diagram</div>
            <div className="desc w-full">
              Selanjutnya ide-ide tersebut kita kelompokan berdasarkan kategori
              dan fungsinya masing-masing pada Affinity Diagram.
            </div>
          </div>
          <div className="container md:mx-auto md:px-40 img-medium">
            <img
              src="/kitabisa_assets/affinitydiagram.svg"
              alt="image"
              className="w-full h-auto"
            />
          </div>
          <div className="container md:mx-auto md:px-40 desc-detail-project">
            <div className="subtitle w-full md:w-5/12">Prioritization Idea</div>
            <div className="desc w-full">
              Tahap selanjutnya yaitu Prioritization Idea, pada tahap ini kita
              mempersempit lagi ide-ide yang sudah ditemukan. Disini kita
              temukan solusi dan fitur apa saja yang harus kita kembangkan
              terlebih dahulu, dengan fokus parameter User Value yang tinggi dan
              Effort yang rendah untuk pengerjaannya.
            </div>
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
            <div className="subtitle w-full md:w-5/12">Crazy 8's</div>
            <div className="desc w-full">
              Setelah itu, kami setiap anggota tim akan melakukan brainstorming
              ide design menggunakan metode Crazy 8’s yang nanti selanjutnya
              akan dikembangkan lebih detail pada tahap Wireframing, Crazy 8’s
              sendiri merupakan metode design dengan cara kita melipat kertas
              menjadi 8 bagian, lalu kita akan mendesign screen berdasarkan
              ide-ide sebelumnya ditemukan selama 8 menit. Dengan metode ini
              kita dapat jauh lebih cepat, karena kita bisa mencoba alternatif
              desain atau layout dalam waktu yang relatif singkat.
            </div>
          </div>
          <div className="container md:mx-auto md:px-40 img-medium">
            <img
              src="/kitabisa_assets/crazy8's.svg"
              alt="image"
              className="w-full h-auto"
            />
          </div>
          <div className="container md:mx-auto md:px-40 desc-detail-project">
            <div className="subtitle w-full md:w-5/12">User Flow</div>
            <div className="desc w-full">
              User Flow adalah kumpulan langkah-langkah yang harus dilakukan
              oleh pengguna saat menggunakan produk untuk menyelesaikan tugas
              tertentu. Pada bagian ini kami berfokus bagaimana agar pengguna
              dapat dengan mudah mengakses halaman kabar terbaru. Dari User flow
              yang sudah kami rancang, kami melakukan improve agar mempersingkat
              flow user dalam mengakses halaman kabar terbaru dengan cara
              membuat section kabar terbaru di halaman homepage, nantinya di
              section ini akan menampilkan kabar terbaru berdasarkan campaign
              yang sudah pengguna donasikan.
            </div>
          </div>
          <div className="container md:mx-auto md:px-40 img-medium">
            <img
              src="/kitabisa_assets/userflow.svg"
              alt="image"
              className="w-full h-auto"
            />
          </div>
          <div className="container md:mx-auto md:px-40 desc-detail-project">
            <div className="subtitle w-full md:w-5/12">Wireframe</div>
            <div className="desc w-full">
              Wireframe adalah kerangka dari suatu design yang berisi
              informasi-informasi penting yang akan ditampilkan pada suatu
              halaman. Pada tahap ini kami membuat wireframe dari ide-ide yang
              sudah kami temukan sebelumnya. Dengan wireframe ini kita bisa
              menentukan layout dan struktur dari suatu halaman, tanpa harus
              memikirkan desain visualnya terlebih dahulu.
            </div>
          </div>
          <div className="container md:mx-auto md:px-40 img-medium">
            <img
              src="/kitabisa_assets/wireframe.svg"
              alt="image"
              className="w-full h-auto"
            />
          </div>
          <div className="container md:mx-auto md:px-40 desc-detail-project">
            <div className="subtitle w-full md:w-5/12">High Fidelity</div>
            <div className="desc w-full">
              High Fidelity adalah tahap dimana kita membuat design yang sudah
              kita buat sebelumnya menjadi lebih detail dan lebih realistis.
              Pada tahap ini kita akan menambahkan warna, icon, dan font yang
              sesuai dengan brand Kitabisa.
            </div>
          </div>
          <div className="container md:mx-auto md:px-40 img-medium">
            <img
              src="/kitabisa_assets/hifi.svg"
              alt="image"
              className="w-full h-auto"
            />
          </div>
          <iframe
            className="container md:mx-auto md:px-40 w-full"
            height={640}
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fslj591nlcut152rAf9b5sb%2FKLP-11---SVI---UIX16%3Fpage-id%3D132%253A478%26type%3Ddesign%26node-id%3D140-623%26viewport%3D329%252C171%252C0.07%26t%3Di41yyVjljI2gnPhI-1%26scaling%3Dscale-down%26starting-point-node-id%3D140%253A623%26show-proto-sidebar%3D1%26mode%3Ddesign"
            allowfullscreen
          ></iframe>
          <div className="container md:mx-auto md:px-40 desc-detail-project">
            <div className="subtitle w-full md:w-5/12">5. Testing</div>
            <div className="desc w-full">
              Pada tahap ini kita akan melakukan proses validasi ide dari yang
              sudah kami buat, disini kami akan membagi kan prototype yang sudah
              saya buat yang nantinya akan langsung di coba oleh user. Untuk
              metode testing yang kami gunakan yaitu metode In-Depth Interview
              dan Usability Testing dengan hasil dari Single Ease Question
              adalah 6/7, yang artinya prototype yang sudah dibuat sudah
              memenuhi dari permasalah yang kita temui.
            </div>
          </div>
          <div className="container md:mx-auto md:px-40 desc-detail-project">
            <div className="subtitle w-full md:w-5/12">Kesimpulan</div>
            <div className="desc w-full">
              Dalam case study ini tim kami mencoba untuk menjawab permasalahan
              yang sudah di jabarkan sebelumnya, tentu baik dari sisi UX, UI,
              dan tulisan yang dibuat masih banyak kekurangan dan masih bisa
              untuk di kembangkan lagi. Sekian studi kasus dari saya, semoga di
              studi kasus ini bisa menginspirasi teman-teman semua. Terimakasih
              sudah mau mampir dan membaca tulisan saya.
            </div>
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
