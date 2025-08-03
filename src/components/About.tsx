import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import interiorImage from '@/assets/interior-dining.jpg';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('aboutTitle')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('aboutText')}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <Card className="shadow-card hover:shadow-card-hover transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🍱</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Traditional Recipes</h3>
                    <p className="text-sm text-muted-foreground">Authentic flavors passed down through generations</p>
                  </CardContent>
                </Card>

                <Card className="shadow-card hover:shadow-card-hover transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🌟</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Premium Ingredients</h3>
                    <p className="text-sm text-muted-foreground">Finest quality ingredients from Japan and local markets</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-card-hover">
                <img
                  src={interiorImage}
                  alt="Restaurant Interior"
                  className="w-full h-96 object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;