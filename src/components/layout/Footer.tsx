'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
} from 'lucide-react';

export default function Footer() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/');
  };
  const handleSecondaryAction = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const footerSections = [
    {
      title: 'SAP Solutions',
      links: [
        { name: 'ERP Implementation', href: '#erp-implementation' },
        { name: 'S/4HANA Migration', href: '#s4hana-migration' },
        { name: 'Cloud Integration', href: '#cloud-integration' },
        { name: 'Business Intelligence', href: '#business-intelligence' },
        { name: 'Custom Development', href: '#custom-development' },
        { name: 'System Optimization', href: '#system-optimization' },
      ],
    },
    {
      title: 'Industries',
      links: [
        { name: 'Manufacturing', href: '#manufacturing' },
        { name: 'Retail & Distribution', href: '#retail' },
        { name: 'Financial Services', href: '#financial' },
        { name: 'Healthcare', href: '#healthcare' },
        { name: 'Energy & Utilities', href: '#energy' },
        { name: 'Public Sector', href: '#public-sector' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Implementation Guide', href: '#implementation-guide' },
        { name: 'ROI Calculator', href: '#roi-calculator' },
        { name: 'Best Practices', href: '#best-practices' },
        { name: 'Training Programs', href: '#training' },
        { name: 'Success Stories', href: '#case-studies' },
        { name: 'Support Portal', href: '#support' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'SAP Partnership', href: '#partnership' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Our Methodology', href: '#methodology' },
        { name: 'Expert Team', href: '#team' },
        { name: 'Compliance', href: '#compliance' },
        { name: 'Data Security', href: '#security' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/sap-integrator' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/sapintegrator' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/sapintegrator' },
  ];

  return (
    <footer className="bg-background border-t border-primary/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">S</span>
                </div>
                <span className="font-bold text-xl text-foreground">SAP Integrator Company</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Transforming enterprises through seamless SAP ERP integration. Over 15 years of
                expertise helping Fortune 500 companies optimize their digital infrastructure and
                accelerate growth.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">enterprise@sapintegrator.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (888) 742-3787</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                  Enterprise Plaza, 2500 Corporate Drive
                </span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-foreground">SAP Insights Newsletter</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your business email"
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button
                  size="sm"
                  className="px-3 bg-primary hover:bg-primary/90"
                  onClick={handlePrimaryAction}
                >
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Monthly ERP trends, implementation tips, and digital transformation insights.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm text-foreground">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary/20 bg-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 SAP Integrator Company. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Certified SAP Gold Partner <Heart className="size-3 text-primary fill-current" />
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Connect:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-border/30">
            <Link
              href="/gdpr-compliance"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              GDPR Compliance
            </Link>
            <Link
              href="/iso-certifications"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              ISO Certifications
            </Link>
            <Link
              href="/data-protection"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Data Protection
            </Link>
            <Link
              href="/enterprise-support"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              24/7 Enterprise Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
