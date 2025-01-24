"use client";

import { FormProvider, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { StateSelect } from "@/components/StateSelect/state-select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Check, Icon, Plus } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

export default function CreateCurriculumPage() {
  const [skills, setSkills] = useState<string[]>([]);
  const [currentSkill, setCurrentSkill] = useState<string>("");

  const form = useForm();

  const onSubmit = (data: any) => {
    console.log("Form data:", data);
  };

  const handleAddSkill = () => {
    if (currentSkill.trim() !== "") {
      setSkills((prevSkills) => [...prevSkills, currentSkill]); // Adiciona a nova habilidade ao array
      setCurrentSkill(""); // Limpa o campo de entrada
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100 px-16 py-12">
      <div className="border-gray-800 border rounded-lg w-[1000px] p-8 bg-white shadow-lg">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-10">
            <div className="grid gap-4">
              <h1 className="lg:text-2xl font-bold text-gray-800 mb-4">
                Dados Pessoais
              </h1>
              <div className="grid gap-2">
                <Label htmlFor="name">Nome Completo</Label>
                <Input id="name" type="text" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="work">Função ou Cargo</Label>
                <Input id="work" type="text" />
              </div>
              <div className="flex gap-2">
                <div className="grid gap-2 flex-1">
                  <Label htmlFor="city">Cidade</Label>
                  <Input id="city" type="text" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="state">Estado</Label>
                  <StateSelect />
                </div>
              </div>
            </div>
            <Separator />
            <div className="grid gap-4">
              <h1 className="lg:text-2xl font-bold text-gray-800 mb-4">
                Contatos e Mídias Sociais
              </h1>
              <div className="grid grid-cols-2 gap-x-2 gap-y-4">
                <div className="grid gap-2 ">
                  <Label htmlFor="phone">Número do Celular</Label>
                  <Input id="phone" type="phone" />
                </div>
                <div className="grid gap-2 ">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" />
                </div>
                <div className="grid gap-2 ">
                  <Label htmlFor="linkedin">Linkedin</Label>
                  <Input id="linkedin" type="link" />
                </div>
                <div className="grid gap-2 ">
                  <Label htmlFor="github">Github ou Repositório</Label>
                  <Input id="github" type="link" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="portfolio">Portfólio</Label>
                  <Input id="portfolio" type="link" />
                </div>
              </div>
            </div>
            <Separator />
            <div className="grid gap-4">
              <h1 className="lg:text-2xl font-bold text-gray-800 mb-4">
                Resumo do Currículo
              </h1>
              <div className="grid gap-2">
                <Textarea
                  id="resume"
                  placeholder="Um resumo de currículo deve ser conciso e direto ao ponto, geralmente com um tamanho de 3 a 5 linhas ou cerca de 300 a 500 caracteres."
                />
              </div>
            </div>
            <Separator />
            <div className="grid gap-4">
              <h1 className="lg:text-2xl font-bold text-gray-800 mb-4">
                Habilidades Técnicas
              </h1>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="flex justify-center py-1 text-sm truncate w-auto"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
              <div className="grid gap-2 ">
                <Label htmlFor="skills">Habilidade</Label>
                <div className="flex gap-2">
                  <Input
                    id="skills"
                    type="text"
                    className="w-1/3"
                    value={currentSkill}
                    onChange={(e) => setCurrentSkill(e.target.value)}
                  />
                  <Button size={"icon"} onClick={handleAddSkill}>
                    <Check />
                  </Button>
                </div>
              </div>
            </div>
            {/* 
            <h1 className="lg:text-2xl font-bold text-gray-800 mb-4">
              Experiências
            </h1>
            <h1 className="lg:text-2xl font-bold text-gray-800 mb-4">
              Educação
            </h1>
            <h1 className="lg:text-2xl font-bold text-gray-800 mb-4">
              Cursos e Certificações
            </h1>
            <h1 className="lg:text-2xl font-bold text-gray-800 mb-4">
              Idiomas
            </h1> */}
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
