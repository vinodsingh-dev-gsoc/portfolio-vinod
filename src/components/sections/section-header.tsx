import { cn } from "@/lib/utils"
import Link from "next/link"
import { WordReveal } from "../reveal-animations"
import { ReactNode } from "react"
import { motion } from "motion/react"

export const SectionHeader = ({ id, title, desc, className }: { id: string, title: string | ReactNode, desc?: string, className?: string }) => {
  return (
    <div className={cn("top-[70px] sticky mb-96 z-30", className)}>
      <Link href={`#${id}`} className="block">
        {typeof title === "string" ? (
          <h2 className="text-4xl text-center md:text-7xl font-bold text-foreground">
            <WordReveal text={title} />
          </h2>
        ) : (
          <WordReveal className="text-4xl text-center md:text-7xl font-bold text-foreground">
            <h2>{title}</h2>
          </WordReveal>
        )}
      </Link>
      {desc && (
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-3 line-clamp-4 max-w-3xl font-normal text-base text-center text-muted-foreground"
        >
          {desc}
        </motion.p>
      )}
    </div>
  )
}
