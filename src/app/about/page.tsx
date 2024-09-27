"use client";
import { useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  const [showModal, setShowModal] = useState(false);

  return (
    <> 
      <Navbar />
      <main className="container mx-auto">
        <div className="flex flex-col justify-center items-center gap-4 p-8 ">
          <h1 className="text-4xl font-bold my-6">usersApp</h1>
          <p className="text-center">
            a usersapp é uma aplicação simples de cadastro de usuários que
            permite a criação e gestão de usuários de maneira simples e dinamica
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
