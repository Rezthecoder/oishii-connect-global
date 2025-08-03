import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import chefImage from '@/assets/chef-portrait.jpg';

const Staff = () => {
  const { t } = useLanguage();

  const staffMembers = [
    {
      name: 'Hiroshi Tanaka',
      role: t('headChef'),
      image: chefImage,
      bio: 'With over 20 years of experience in traditional Japanese cuisine, Chef Tanaka brings authentic flavors and innovative techniques to every dish.',
      specialties: ['Sushi', 'Kaiseki', 'Tempura']
    },
    {
      name: 'Yuki Sato',
      role: t('sousChef'),
      image: chefImage,
      bio: 'A master of modern Japanese fusion, Chef Sato combines traditional methods with contemporary presentation for a unique dining experience.',
      specialties: ['Fusion', 'Ramen', 'Desserts']
    },
    {
      name: 'Maria Rodriguez',
      role: t('manager'),
      image: chefImage,
      bio: 'With a passion for hospitality and extensive experience in fine dining, Maria ensures every guest receives exceptional service.',
      specialties: ['Service', 'Wine Pairing', 'Events']
    }
  ];

  return (
    <section id="staff" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('staffTitle')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the talented individuals who make your dining experience exceptional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staffMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-sm opacity-90">{member.role}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, specIndex) => (
                      <span
                        key={specIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Staff;