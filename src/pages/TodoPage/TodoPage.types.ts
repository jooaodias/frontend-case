import { ReactNode } from "react";

export type ITodoItem = {
  id: string;
  title: string;
  description: ReactNode;
  status: ITodoTypes;
  links?: Array<{ name: string; url: string }>;
  required?: boolean;
};

export type ITodoTypes = "pending" | "done";
