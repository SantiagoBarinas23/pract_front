"use client";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";



export default function Home() {

  return (
    <div className="Container">
      <div className="Login">
        <h1>Inicio</h1>
        <div className="knot-right">
          <img src="/Inicio.png" alt="Inicio" />
        </div>
      </div> 
    </div>
  );



}
