ALTER TABLE "customers" ADD COLUMN "updated_at" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "tickets" ADD COLUMN "updated_at" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "customers" DROP COLUMN "updatedAt";--> statement-breakpoint
ALTER TABLE "tickets" DROP COLUMN "updatedAt";