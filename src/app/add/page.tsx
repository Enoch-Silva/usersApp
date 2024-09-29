"use client";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { usersApi } from "../../features/api/apiSlice";

export default function Add() {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const roleRef = useRef<HTMLInputElement | null>(null);

  const [addUser] = usersApi.endpoints.addUser.useMutation();

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (
      !nameRef.current?.value ||
      !emailRef.current?.value ||
      !roleRef.current?.value
    )
      return;

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const role = roleRef.current.value;

    addUser({ name, email, role });

    toast.success("Usuário cadastrado com sucesso!", {
      autoClose: 2000,
    });

    nameRef.current.value = "";
    emailRef.current.value = "";
    roleRef.current.value = "";
  }

  return (
    <>
      <Navbar />
      <main className="container mx-auto">
        <div>
          <h1 className="text-3xl text-gray-400 my-4 sm:ml-6">Criar Usuário</h1>
          <form className="flex flex-col items-center p-4">
            <input
              ref={nameRef}
              className="lg:w-[50%] sm:w-full p-4 m-4 border-2 border-gray-500 bg-zinc-950 rounded"
              type="text"
              name="name"
              id=""
              placeholder="Digite o nome"
            />
            <input
              ref={emailRef}
              className="lg:w-[50%] sm:w-full p-4 m-4 border-2 border-gray-500 bg-zinc-950 rounded"
              type="text"
              name="email"
              id=""
              placeholder="Digite o e-mail"
            />
            <input
              ref={roleRef}
              className=" lg:w-[50%] sm:w-full p-4 m-4 border-2 border-gray-500 bg-zinc-950 rounded"
              type="text"
              name="role"
              id=""
              placeholder="Digite o cargo"
            />
            <input
              className="lg:w-[50%] sm:w-[80%] p-4 m-4 bg-green-500 text-xl text-black rounded"
              type="submit"
              value="Cadastrar"
              onClick={handleSubmit}
            />
          </form>
        </div>
      </main>
      <ToastContainer position="top-center" />
      <Footer />
    </>
  );
}
