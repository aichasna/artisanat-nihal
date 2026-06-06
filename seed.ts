import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.update({
    where: { id: 1 },
    data: {
      images: [
        "/images/products/sac-hedba1.png",
        "/images/products/sac-hedba2.png",
        "/images/products/sac-hedba3.png",
      ],
    },
  });
  console.log("✅ Images ajoutées avec succès !");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());