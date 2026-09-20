import type { Metadata } from "next";
import { ProductOwnerPage } from "@/components/product-owner/product-owner-page";

export const metadata: Metadata = {
  title: "For Product Owners — Fonitas",
  description:
    "See how Fonitas helps application owners move from intake and evaluation to QA, publishing, growth and financial operations.",
};

export default function ProductOwners() {
  return <ProductOwnerPage />;
}
