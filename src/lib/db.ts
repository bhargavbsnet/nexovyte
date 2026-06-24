import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma =
  globalThis.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma;
}

class MemoryDb {
  private contacts: any[] = [];
  private subscribers: any[] = [];
  private bookings: any[] = [];
  private inquiries: any[] = [];
  private applications: any[] = [];

  async saveContact(data: { name: string; email: string; company?: string; inquiryType: string; message: string }) {
    const record = { id: `contact-${Date.now()}`, ...data, createdAt: new Date() };
    if (process.env.DATABASE_URL) {
      try {
        return await prisma.contactSubmission.create({ data });
      } catch (err) {
        console.warn("Prisma write failed, using memory DB:", err);
      }
    }
    this.contacts.push(record);
    return record;
  }

  async saveSubscriber(email: string) {
    const record = { id: `sub-${Date.now()}`, email, status: "active", createdAt: new Date() };
    if (process.env.DATABASE_URL) {
      try {
        return await prisma.newsletterSubscriber.create({ data: { email } });
      } catch (err) {
        console.warn("Prisma write failed, using memory DB:", err);
      }
    }
    if (!this.subscribers.some((s) => s.email === email)) {
      this.subscribers.push(record);
    }
    return record;
  }

  async saveBooking(data: { fullName: string; email: string; date: string; timeSlot: string }) {
    const record = { id: `booking-${Date.now()}`, ...data, createdAt: new Date() };
    if (process.env.DATABASE_URL) {
      try {
        return await prisma.consultationBooking.create({ data });
      } catch (err) {
        console.warn("Prisma write failed, using memory DB:", err);
      }
    }
    this.bookings.push(record);
    return record;
  }

  async saveProductInquiry(data: { clientName: string; email: string; productType: string; message: string }) {
    const record = { id: `inquiry-${Date.now()}`, ...data, createdAt: new Date() };
    if (process.env.DATABASE_URL) {
      try {
        return await prisma.productInquiry.create({ data });
      } catch (err) {
        console.warn("Prisma write failed, using memory DB:", err);
      }
    }
    this.inquiries.push(record);
    return record;
  }

  async saveApplication(data: { fullName: string; email: string; position: string; resumeUrl?: string; coverLetter?: string }) {
    const record = { id: `app-${Date.now()}`, ...data, createdAt: new Date() };
    if (process.env.DATABASE_URL) {
      try {
        return await prisma.jobApplication.create({ data });
      } catch (err) {
        console.warn("Prisma write failed, using memory DB:", err);
      }
    }
    this.applications.push(record);
    return record;
  }
}

export const memoryDb = new MemoryDb();
