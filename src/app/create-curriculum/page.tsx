"use client";

import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { StateSelect } from "@/components/StateSelect/state-select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Check, Icon, Plus, X } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

export default function CreateCurriculumPage() {
  const [skills, setSkills] = useState<string[]>([]);
  const [currentSkill, setCurrentSkill] = useState<string>("");

  const form = useForm({
    defaultValues: {
      name: "",
      role: "",
      city: "",
      state: "",
      phone: "",
      email: "",
      linkedin: "",
      repository: "",
      portfolio: "",
      resume: "",
      skills: [{}],
      experiences: [
        {
          companyName: "",
          role: "",
          city: "",
          state: "",
          start: "",
          end: "",
          currently: false,
          activities: [],
        },
      ],
      education: [
        {
          institutionName: "",
          course: "",
          title: "",
          city: "",
          state: "",
          start: "",
          end: "",
          currently: false,
        },
      ],
      languages: [
        {
          language: "",
          level: "",
        },
      ],
    },
  });
  const { register, reset, control } = form;

  const onSubmit = (data: any) => {
    console.log("Form data:", data);
  };

  const {
    fields: fieldsSkills,
    append: appendSkills,
    remove: removeSkills,
  } = useFieldArray({
    control,
    name: "skills",
  });

  const handleAddSkill = () => {
    if (currentSkill.trim() !== "") {
      setSkills((prevSkills) => [...prevSkills, currentSkill]); // Adiciona a nova habilidade ao array
      setCurrentSkill(""); // Limpa o campo de entrada
    }
  };
  const handleRemoveSkill = (skillToRemove: string) => {
    setSkills((prevSkills) =>
      prevSkills.filter((skill) => skill !== skillToRemove)
    );
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100 px-16 py-12">
      <div className="border-gray-800 border rounded-lg w-[1000px] p-8 bg-white shadow-lg">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-10">
            <div className="grid gap-4">
              <h1 className="lg:text-2xl font-bold text-gray-800">
                Dados Pessoais
              </h1>
              <div className="grid gap-2">
                <Label>Nome Completo</Label>
                <Input type="text" {...register("name")} />
              </div>
              <div className="grid gap-2">
                <Label>
                  Função ou Cargo (Deixar em branco caso não tenha!)
                </Label>
                <Input type="text" {...register("role")} />
              </div>
              <div className="flex gap-2">
                <div className="grid gap-2 flex-1">
                  <Label>Cidade</Label>
                  <Input type="text" {...register("city")} />
                </div>
                <div className="grid gap-2">
                  <Label>Estado</Label>
                  <StateSelect name={"state"} />
                </div>
              </div>
            </div>
            <Separator />
            <div className="grid gap-4">
              <h1 className="lg:text-2xl font-bold text-gray-800 ">
                Contatos e Mídias Sociais
              </h1>
              <div className="grid grid-cols-2 gap-x-2 gap-y-4">
                <div className="grid gap-2 ">
                  <Label>Número do Celular</Label>
                  <Input type="text" {...register("phone")} />
                </div>
                <div className="grid gap-2 ">
                  <Label>Email</Label>
                  <Input type="email" {...register("email")} />
                </div>
                <div className="grid gap-2 ">
                  <Label>Linkedin</Label>
                  <Input type="text" {...register("linkedin")} />
                </div>
                <div className="grid gap-2 ">
                  <Label>Repositório</Label>
                  <Input type="text" {...register("repository")} />
                </div>
                <div className="grid gap-2">
                  <Label>Portfólio</Label>
                  <Input type="text" {...register("portfolio")} />
                </div>
              </div>
            </div>
            <Separator />
            <div className="grid gap-4">
              <h1 className="lg:text-2xl font-bold text-gray-800">
                Resumo do Currículo
              </h1>
              <div className="grid gap-2">
                <Textarea
                  placeholder="Um resumo de currículo deve ser conciso e direto ao ponto, geralmente com um tamanho de 3 a 5 linhas ou cerca de 300 a 500 caracteres."
                  {...register("resume")}
                />
              </div>
            </div>
            <Separator />
            <div className="grid gap-4">
              <h1 className="lg:text-2xl font-bold text-gray-800">
                Habilidades Técnicas
              </h1>
              <div className="flex flex-wrap gap-2">
                {/* {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="flex justify-center py-1 text-sm truncate w-auto"
                  >
                    {skill}
                  </Badge>
                ))} */}
                {skills.map((skill, index) => (
                  <div key={index} className="relative group">
                    <Badge
                      variant="outline"
                      className="flex justify-center py-1 text-sm truncate w-auto transition-all duration-200 bg-opacity-100 group-hover:bg-opacity-50"
                    >
                      {skill}
                    </Badge>
                    <button
                      onClick={() => handleRemoveSkill(skill)} // Chame sua função aqui
                      className="p-0.5 absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    >
                      <X />
                    </button>
                  </div>
                ))}
              </div>
              <div className="grid gap-2 ">
                <Label htmlFor="skills">Habilidade</Label>
                <div className="flex gap-2">
                  <Input
                    id="skills"
                    type="text"
                    className="w-1/3 "
                    value={currentSkill}
                    onChange={(e) => setCurrentSkill(e.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        event.preventDefault(); // Impede que o Enter funcione
                      }
                    }}
                  />
                  <Button size={"icon"} onClick={handleAddSkill}>
                    <Check />
                  </Button>
                </div>
              </div>
            </div>
            <Separator />
            <div className="grid gap-4">
              <div>
                <div className="flex gap-2">
                  <h1 className="lg:text-2xl font-bold text-gray-800">
                    Experiências
                  </h1>
                  <Button size={"icon"}>
                    <Plus />
                  </Button>
                </div>
                <Label>Obs: Adicione mais experiências caso precisar</Label>
              </div>
              <div></div>
              <div className="relative grid grid-cols-2 gap-x-2 gap-y-4 p-5 border border-zinc-200 rounded-md">
                <div className="grid gap-2">
                  <Label htmlFor="phone">Nome da Empresa</Label>
                  <Input id="phone" type="phone" />
                </div>
                <div className="grid gap-2 ">
                  <Label htmlFor="phone">Função ou Cargo</Label>
                  <Input id="phone" type="phone" />
                </div>
                <div className="grid grid-cols-2 gap-2 ">
                  <div className="grid gap-2 ">
                    <Label htmlFor="phone">Cidade</Label>
                    <Input id="phone" type="phone" />
                  </div>
                  <div className="grid gap-2 ">
                    <Label htmlFor="phone">Estado</Label>
                    <Input id="phone" type="phone" />
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-2 ">
                  <div className="grid gap-2 col-span-3 ">
                    <Label htmlFor="phone">Início</Label>
                    <Input id="phone" type="phone" />
                  </div>
                  <div className="grid gap-2  col-span-3 ">
                    <Label htmlFor="phone">Término</Label>
                    <Input id="phone" type="phone" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Atualmente</Label>
                    <Input id="phone" type="checkbox" />
                  </div>
                </div>
                <div className="col-span-2">
                  <Label htmlFor="phone">Atividade 1</Label>
                  <Input id="phone" type="text" />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="phone">Atividade 2</Label>
                  <Input id="phone" type="text" />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="phone">Atividade 3</Label>
                  <Input id="phone" type="text" />
                </div>
              </div>
            </div>
            {/* 
            <h1 className="lg:text-2xl font-bold text-gray-800 mb-4">
              Educação
            </h1>
            <h1 className="lg:text-2xl font-bold text-gray-800 mb-4">
              Cursos e Certificações
            </h1>
            <h1 className="lg:text-2xl font-bold text-gray-800 mb-4">
              Idiomas
            </h1> */}
            <Button className="">Gerar Currículo</Button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
