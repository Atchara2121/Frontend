import Image from "next/image";
import styles from './page.module.css';
import './/globals.css';
import Script from "next/script";

import Nan from './/ปกเที่ยวน่าน (1).jpg';
import road from './/ถนนลอยฟ้า.jpg';
// import amdImage from './/AMD.jpg';
import nvidiaImage from './/nvidia2.jpg';
// import  from './/.png';

export default function Home() {
  return (
    <>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><Image src={Nan} className="d-clock w-100" alt="N" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Service</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#" >Contact</a>
        </li>
      </ul>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button className="btn btn-primary me-md-2" type="button">sing in</button>
        <button className="btn btn-primary" type="button">sing up</button>
      </div>
    </div>
  </div>
</nav>



    <div className="container"> 

      <div className="row mb-3">
        <div className="col-md-12 text-center bg-secondary  p-5 border rounded">
        <Image src={road} className="d-clock w-100 " alt="N" />
        </div>
      </div>

      <div className="row mb-3 ">
        <div className="col-md-4 text-center bg-light p-5  border rounded">
          <Image src={road} className="d-clock w-100" alt="N" />
        </div>

          <div className="col-md-4 text-center bg-light p-5  border rounded">
          <Image src={Nan} className="d-clock w-100" alt="N" />
        </div>

          <div className="col-md-4 text-center bg-light p-5  border rounded">
          <Image src={nvidiaImage} className="d-clock w-100" alt="N" />
        </div>

        </div>

        <div className="row">
        <div className="col-md text-center bg-success p-5 border rounded">
        <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
    </ul>
    <p class="text-center text-muted">© 2022 Company, Inc</p>
  </footer>
          </div>
        </div>

      </div>

</>
  );
}