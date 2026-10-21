import { ArrowUpRight, Check, Copy, Download, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import cvPdf from '@/assets/Cristopher-Lopez-CV.pdf'

const EMAIL = 'cristopher.lopezsantana@gmail.com'

export const ContactSection = () => {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timeout = setTimeout(() => setCopied(false), 2500)
    return () => clearTimeout(timeout)
  }, [copied])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="py-24 px-4 relative"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="reveal panel p-8 md:p-12">
            <p className="eyebrow">05 / Get in touch</p>
            <h2
              id="contact-title"
              className="mt-4 mb-6 text-4xl font-extrabold leading-[1.05] tracking-[-0.05em] md:text-6xl"
            >
              Let&rsquo;s work
              <br />
              <span className="text-gradient">together.</span>
            </h2>
            <p className="mb-8 max-w-lg leading-relaxed text-muted-foreground">
              Hiring a senior frontend engineer? Want to talk architecture,
              product delivery or engineering teams? I&rsquo;d be happy to
              connect.
            </p>
            <a
              href={`mailto:${EMAIL}?subject=Frontend%20engineering%20opportunity`}
              className="brand-button inline-flex items-center gap-2"
            >
              <Mail className="size-4" />
              Send me an email
            </a>
          </div>

          <div className="reveal panel flex flex-col p-8 md:p-10">
            <p className="eyebrow mb-4">Direct contact</p>
            <a
              href={`mailto:${EMAIL}`}
              className="mb-5 break-all font-grotesk text-xl font-bold tracking-tight transition-colors hover:text-primary md:text-2xl"
            >
              {EMAIL}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="btn-secondary mb-8 w-fit px-4 text-sm"
              aria-live="polite"
            >
              {copied ? (
                <>
                  <Check className="size-4" /> Email copied
                </>
              ) : (
                <>
                  <Copy className="size-4" /> Copy email address
                </>
              )}
            </button>

            <div className="mt-auto flex flex-wrap gap-x-6 gap-y-3 border-t border-border/70 pt-6 font-grotesk text-sm font-semibold text-primary">
              <a
                href="https://www.linkedin.com/in/cristopherlopez"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:underline underline-offset-4"
              >
                <FaLinkedinIn /> LinkedIn <ArrowUpRight className="size-3.5" />
              </a>
              <a
                href="https://github.com/ramclen"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:underline underline-offset-4"
              >
                <FaGithub /> GitHub <ArrowUpRight className="size-3.5" />
              </a>
              <a
                href={cvPdf}
                download
                className="inline-flex items-center gap-2 hover:underline underline-offset-4"
              >
                <Download className="size-4" /> Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
