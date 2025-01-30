"use client";

import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { StateSelect } from "@/components/StateSelect/state-select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Check, Plus, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";

export default function CreateCurriculumPage() {
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
      skills: [
        {
          skill: "",
        },
      ],
      experiences: [
        {
          companyName: "",
          role: "",
          city: "",
          state: "",
          start: "",
          end: "",
          currently: false,
          activities: [
            {
              activity: "",
            },
          ],
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
  const { register, control } = form;

  const onSubmit = (data: unknown) => {
    console.log("Form data:", data);
  };

  const {
    fields: fieldsSkills,
    append: appendSkill,
    remove: removeSkill,
  } = useFieldArray({
    control,
    name: "skills",
  });

  const {
    fields: fieldsExperiences,
    append: appendExperience,
    remove: removeExperience,
  } = useFieldArray({
    control,
    name: "experiences",
  });

  useEffect(() => {
    removeSkill(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                {fieldsSkills.map((field, index) => (
                  <div key={index} className="relative group">
                    <Badge
                      variant="outline"
                      className="flex justify-center py-1 text-sm truncate w-auto transition-all duration-200 bg-opacity-100 group-hover:bg-opacity-50"
                    >
                      {field.skill}
                    </Badge>
                    <button
                      onClick={() => removeSkill(index)} // Chame sua função aqui
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
                  <Button
                    size={"icon"}
                    onClick={() => {
                      appendSkill({ skill: currentSkill });
                      setCurrentSkill("");
                    }}
                  >
                    <Check />
                  </Button>
                </div>
              </div>
            </div>
            <Separator />
            <div className="grid gap-4">
              <div className="flex gap-2 justify-between items-end">
                <div className="grid gap-2">
                  <h1 className="lg:text-2xl font-bold text-gray-800">
                    Experiências
                  </h1>
                  <Label>Obs: Adicione mais experiências caso precisar</Label>
                </div>
                <Button
                  onClick={() => {
                    appendExperience({
                      companyName: "",
                      role: "",
                      city: "",
                      state: "",
                      start: "",
                      end: "",
                      currently: false,
                      activities: [],
                    });
                  }}
                >
                  <Plus />
                  Adicionar
                </Button>
              </div>
              {fieldsExperiences.map((fieldExperience, indexExperience) => {
                const {
                  fields: fieldsActivities,
                  append: appendActivity,
                  remove: removeActivity,
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                } = useFieldArray({
                  control,
                  name: `experiences.${indexExperience}.activities`,
                });

                return (
                  <div
                    key={indexExperience}
                    className="relative grid grid-cols-2 gap-x-2 gap-y-4 p-5 border border-zinc-200 rounded-md"
                  >
                    <button
                      onClick={() => removeExperience(indexExperience)} // Chame sua função aqui
                      className="p-0.5 absolute top-0 right-4 transform -translate-y-1/2 border-red-600 border bg-white text-red-500 rounded-full w-6 h-6 flex items-center justify-center"
                    >
                      <X />
                    </button>
                    <div className="grid gap-2">
                      <Label>Nome da Empresa</Label>
                      <Input
                        type="text"
                        {...register(
                          `experiences.${indexExperience}.companyName`
                        )}
                      />
                    </div>
                    <div className="grid gap-2 ">
                      <Label>Função ou Cargo</Label>
                      <Input
                        type="text"
                        {...register(`experiences.${indexExperience}.role`)}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2 ">
                      <div className="grid gap-2 ">
                        <Label>Cidade</Label>
                        <Input
                          type="text"
                          {...register(`experiences.${indexExperience}.city`)}
                        />
                      </div>
                      <div className="grid gap-2 ">
                        <Label>Estado</Label>
                        <StateSelect
                          name={`experiences.${indexExperience}.state`}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-5 gap-2 ">
                      <div className="grid gap-2 col-span-2 ">
                        <Label>Início</Label>
                        <Input
                          type="text"
                          {...register(`experiences.${indexExperience}.start`)}
                        />
                      </div>
                      <div className="grid gap-2  col-span-2 ">
                        <Label>Término</Label>
                        <Input
                          type="text"
                          {...register(`experiences.${indexExperience}.end`)}
                        />
                      </div>
                      <div className="flex flex-col gap-2 justify-between items-center">
                        <Label>Atualmente</Label>
                        <Switch
                          {...register(
                            `experiences.${indexExperience}.currently`
                          )}
                          className="translate -rotate-90 mb-2"
                        />
                      </div>
                    </div>
                    <Separator className="col-span-2" />
                    <div className="col-span-2 flex items-center justify-between gap-2">
                      <Label>Atividades exercídas na função</Label>
                      <Button
                        size={"sm"}
                        variant={"outline"}
                        className="border-primary"
                        onClick={() => appendActivity({ activity: "" })}
                      >
                        <Plus />
                        Adicionar Atividade
                      </Button>
                    </div>
                    {fieldsActivities.map((fieldActivity, indexActivity) => (
                      <div key={indexActivity} className="relative col-span-2">
                        <button
                          onClick={() => removeActivity(indexActivity)} // Chame sua função aqui
                          className=" absolute top-8 right-2 border-red-600 border bg-white text-red-500 rounded-full w-5 h-5 flex items-center justify-center"
                        >
                          <X />
                        </button>
                        <Label>Atividade {indexActivity + 1}</Label>
                        <Input
                          type="text"
                          {...register(
                            `experiences.${indexExperience}.activities.${indexActivity}.activity`
                          )}
                        />
                      </div>
                    ))}
                  </div>
                );
              })}
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
