"use client";
import React from "react";
import { useForm } from "../hooks/useForm";
import EventService from "../services/event";
import { CreateEventInput } from "../types";
import TextInput from "./TextInput";

export default function CreateEventForm() {
  const [alert, setAlert] = React.useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const service = new EventService();

  const { register, handleSubmit, errors, isSubmitting, reset } = useForm({
    initialValues: {
      title: "",
      description: "",
      date: "",
    },
    validate: (values) => {
      const errors: Partial<Record<keyof CreateEventInput, string>> = {};
      if (!values.title) errors.title = "Titre est requis";
      if (!values.description) errors.description = "Description est requise";
      if (!values.date) errors.date = "Date est requise";
      return errors;
    },
  });

  const onSubmit = (values: CreateEventInput) => {
    service.create(
      values,
      () => {
        setAlert({
          message: "L'événement a été créé avec succès.",
          type: "success",
        });
        reset();
      },
      () => {
        setAlert({
          message: "Erreur lors de la création de l'événement.",
          type: "error",
        });
      },
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      {alert && (
        <span
          className={`${alert?.type === "error" ? "bg-red-200" : "bg-green-200"} py-2 px-4 rounded-md`}
        >
          {alert.message}
        </span>
      )}
      <TextInput
        {...register("title")}
        placeholder="Titre de l'événement"
        label="Titre"
        error={errors.title}
      />
      <TextInput
        {...register("description")}
        placeholder="Description de l'événement"
        label="Description"
        error={errors.description}
      />
      <TextInput
        {...register("date")}
        placeholder="Date de l'événement"
        label="Date"
        error={errors.date}
        type="date"
      />
      <button
        disabled={isSubmitting}
        type="submit"
        className={`bg-blue-500 text-white px-2 py-2 rounded-md cursor-pointer`}
      >
        {isSubmitting ? "Création en cours..." : "Créer l'événement"}
      </button>
    </form>
  );
}
