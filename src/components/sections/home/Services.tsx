'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  ArrowRight,
  CheckCircle2,
  Star,
  Database,
  Settings,
  BarChart3,
  Shield,
  Rocket,
  Users,
  Cloud,
  Cpu,
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Services() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/');
  };
  const handleSecondaryAction = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const services = [
    {
      id: 'sap-implementation',
      title: 'SAP ERP Implementation',
      description: 'Complete SAP S/4HANA deployment and configuration',
      longDescription:
        'Our comprehensive SAP implementation service transforms your business operations with industry-leading ERP solutions. We handle everything from system architecture to user training, ensuring seamless integration with your existing workflows.',
      icon: Database,
      benefits: [
        'End-to-end S/4HANA implementation',
        'Custom module configuration',
        'Data migration and validation',
        'Go-live support and optimization',
      ],
      pricing: 'Starting at $150,000',
      timeline: '6-18 months implementation',
      featured: true,
      badge: 'Enterprise Ready',
    },
    {
      id: 'system-integration',
      title: 'Enterprise System Integration',
      description: 'Seamless connectivity between SAP and third-party systems',
      longDescription:
        'Connect your SAP environment with CRM, e-commerce, manufacturing, and financial systems. Our integration experts ensure real-time data synchronization and process automation across your entire technology stack.',
      icon: Settings,
      benefits: [
        'API development and management',
        'Real-time data synchronization',
        'Legacy system modernization',
        'Cloud and on-premise connectivity',
      ],
      pricing: 'Project-based from $25,000',
      timeline: '8-16 weeks per integration',
    },
    {
      id: 'sap-analytics',
      title: 'SAP Analytics & Reporting',
      description: 'Advanced business intelligence and data visualization',
      longDescription:
        'Transform your SAP data into actionable insights with our analytics solutions. We implement SAP Analytics Cloud, custom dashboards, and automated reporting to drive data-driven decision making across your organization.',
      icon: BarChart3,
      benefits: [
        'SAP Analytics Cloud implementation',
        'Custom dashboard development',
        'Predictive analytics modeling',
        'Executive reporting automation',
      ],
      pricing: 'Starting at $35,000',
      timeline: '4-8 weeks',
    },
    {
      id: 'sap-security',
      title: 'SAP Security & Compliance',
      description: 'Comprehensive security framework and audit compliance',
      longDescription:
        'Protect your SAP environment with enterprise-grade security measures. Our security specialists implement role-based access controls, audit trails, and compliance frameworks to meet industry regulations.',
      icon: Shield,
      benefits: [
        'Role-based access control (RBAC)',
        'SOX and GDPR compliance setup',
        'Security vulnerability assessment',
        'Continuous monitoring implementation',
      ],
      pricing: 'Custom security packages',
      timeline: '2-6 weeks per audit',
      badge: 'Compliance Ready',
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary text-primary">
            SAP Integration Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Enterprise SAP Solutions
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Built for Digital Transformation
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive SAP ERP integration services designed to streamline operations, enhance
            productivity, and drive business growth across your enterprise
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div key={service.id}>
                <div
                  className={`
                  group relative overflow-hidden rounded-2xl border
                  ${
                    service.featured
                      ? 'border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent p-8'
                      : 'border-border/50 p-8 hover:border-primary/20 transition-colors duration-300'
                  }
                `}
                >
                  {/* Service Content */}
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div
                        className={`
                        size-14 rounded-xl flex items-center justify-center
                        ${
                          service.featured
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-primary/10 text-primary'
                        }
                      `}
                      >
                        <Icon className="size-7" />
                      </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-grow space-y-4">
                      {/* Title and Badges */}
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-semibold text-foreground">{service.title}</h3>
                        {service.badge && (
                          <Badge
                            variant={service.featured ? 'default' : 'secondary'}
                            className="bg-primary text-primary-foreground"
                          >
                            {service.badge}
                          </Badge>
                        )}
                        {service.featured && (
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="size-4 fill-primary text-primary" />
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Descriptions */}
                      <p className="text-lg text-muted-foreground">{service.description}</p>

                      {service.longDescription && (
                        <p className="text-muted-foreground">{service.longDescription}</p>
                      )}

                      {/* Benefits Grid */}
                      <div className="grid sm:grid-cols-2 gap-3 pt-2">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="size-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      {/* Pricing and Timeline */}
                      <div className="flex flex-wrap gap-6 pt-4">
                        {service.pricing && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Investment:</span>
                            <span className="text-sm font-semibold text-foreground">
                              {service.pricing}
                            </span>
                          </div>
                        )}
                        {service.timeline && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Timeline:</span>
                            <span className="text-sm font-semibold text-foreground">
                              {service.timeline}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* CTA Button */}
                      <div className="pt-4">
                        <Button
                          onClick={handlePrimaryAction}
                          variant={service.featured ? 'default' : 'outline'}
                          className="group/btn bg-primary hover:bg-primary/90 text-primary-foreground"
                        >
                          Request SAP Consultation
                          <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Separator between items */}
                {index < services.length - 1 && <Separator className="my-8 border-border" />}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-muted/50 text-center border border-border">
          <h3 className="text-2xl font-semibold mb-3 text-foreground">
            Ready to Transform Your Enterprise?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our SAP integration experts are ready to assess your current systems and design a
            comprehensive digital transformation strategy tailored to your business needs.
          </p>
          <Button
            onClick={handleSecondaryAction}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Schedule SAP Assessment
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
