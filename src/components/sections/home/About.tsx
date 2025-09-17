'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import {
  Target,
  Users,
  Award,
  Globe,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Database,
  Shield,
  Zap,
  Building2,
} from 'lucide-react';

export default function About() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/');
  };
  const handleSecondaryAction = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const values = [
    {
      icon: Target,
      title: 'Precision Implementation',
      description:
        'We deliver SAP integrations with surgical precision, ensuring zero data loss and seamless business continuity throughout your digital transformation.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description:
        'Your business data is protected with bank-level security protocols, compliance frameworks, and encrypted data channels across all SAP modules.',
    },
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description:
        'Our proven methodologies reduce SAP implementation timelines by 40%, getting your enterprise systems operational faster than industry standards.',
    },
    {
      icon: Database,
      title: 'Data Excellence',
      description:
        'We ensure flawless data migration and integration across all SAP modules, maintaining data integrity and business intelligence capabilities.',
    },
  ];

  const stats = [
    { value: '2015', label: 'SAP Partner Since', icon: Award },
    { value: '500+', label: 'Enterprise Clients', icon: Building2 },
    { value: '99.8%', label: 'Project Success Rate', icon: TrendingUp },
    { value: '45+', label: 'Countries Served', icon: Globe },
  ];

  const team = [
    {
      name: 'Marcus Weber',
      role: 'SAP Practice Director',
      image: 'MW',
      bio: '20+ years SAP consulting. Former SAP AG senior architect with S/4HANA expertise.',
    },
    {
      name: 'Priya Sharma',
      role: 'Integration Lead',
      image: 'PS',
      bio: 'SAP-certified consultant specializing in ABAP, BAPI, and cloud integration platforms.',
    },
    {
      name: 'Thomas Mueller',
      role: 'Technical Architect',
      image: 'TM',
      bio: 'Enterprise architecture expert with deep SAP Basis and HANA database optimization experience.',
    },
    {
      name: 'Lisa Chen',
      role: 'Change Management Director',
      image: 'LC',
      bio: 'Organizational transformation specialist ensuring smooth SAP adoption across enterprise teams.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/30">
            Enterprise SAP Solutions
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Transforming Enterprises Through
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              SAP Integration Excellence
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We are certified SAP integration specialists delivering enterprise-grade ERP solutions
            that streamline operations, enhance productivity, and drive digital transformation
            across global organizations.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our SAP Expertise</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded by former SAP consultants in 2015, we recognized that enterprises needed
                more than just software implementation—they needed strategic partners who understood
                business transformation.
              </p>
              <p>
                Our team combines deep SAP technical expertise with industry-specific knowledge,
                delivering S/4HANA migrations, cloud integrations, and custom ABAP development that
                drives measurable ROI.
              </p>
              <p>
                Today, we've successfully transformed over 500 enterprises across manufacturing,
                retail, finance, and logistics sectors, with an industry-leading 99.8% project
                success rate.
              </p>
            </div>
            <Button onClick={handlePrimaryAction} className="group bg-primary hover:bg-primary/90">
              View SAP Case Studies
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="relative">
            <Card className="border-primary/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-primary/10 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "SAP integration isn't just about technology—it's about transforming how
                      enterprises operate and compete."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">
                      - Marcus Weber, SAP Practice Director
                    </cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="text-center border-primary/20 hover:border-primary/40 transition-colors bg-card/50"
              >
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2 text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Our SAP Integration Principles</h3>
            <p className="text-muted-foreground">
              The core methodologies that ensure successful SAP implementations and long-term
              enterprise value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="border-primary/20 hover:border-primary/40 transition-all duration-300 group bg-card/50"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">SAP Certified Experts</h3>
            <p className="text-muted-foreground">
              Our team of SAP-certified consultants brings decades of enterprise implementation
              experience and deep technical expertise across all SAP modules.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card
                key={index}
                className="border-primary/20 hover:border-primary/40 transition-all duration-300 group bg-card/50"
              >
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button
              onClick={handleSecondaryAction}
              variant="outline"
              className="group border-primary/30 hover:border-primary"
            >
              View SAP Certifications
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "Their SAP S/4HANA migration transformed our global operations. The integration was
                flawless, and we achieved 35% faster order processing within the first quarter
                post-implementation."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground font-bold">
                  RK
                </div>
                <div className="text-left">
                  <div className="font-semibold">Robert Klein</div>
                  <div className="text-sm text-muted-foreground">
                    CIO, Global Manufacturing Corp
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
