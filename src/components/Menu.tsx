import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import sashimiImage from '@/assets/dish-sashimi.jpg';

const Menu = () => {
  const { t } = useLanguage();

  const menuItems = [
    {
      category: t('appetizers'),
      items: [
        { name: 'Edamame', description: 'Steamed young soybeans with sea salt', price: '$8', image: sashimiImage },
        { name: 'Gyoza', description: 'Pan-fried pork dumplings with ponzu sauce', price: '$12', image: sashimiImage },
        { name: 'Agedashi Tofu', description: 'Lightly fried tofu in savory dashi broth', price: '$10', image: sashimiImage },
      ]
    },
    {
      category: t('sashimi'),
      items: [
        { name: 'Premium Sashimi Platter', description: 'Chef\'s selection of the finest daily catch', price: '$45', image: sashimiImage, featured: true },
        { name: 'Salmon Sashimi', description: 'Fresh Atlantic salmon, thinly sliced', price: '$18', image: sashimiImage },
        { name: 'Tuna Sashimi', description: 'Premium yellowfin tuna', price: '$22', image: sashimiImage },
      ]
    },
    {
      category: t('mainCourses'),
      items: [
        { name: 'Wagyu Beef Teriyaki', description: 'Premium wagyu beef with house teriyaki sauce', price: '$65', image: sashimiImage, featured: true },
        { name: 'Miso Glazed Salmon', description: 'Atlantic salmon with sweet miso glaze', price: '$28', image: sashimiImage },
        { name: 'Chicken Katsu', description: 'Crispy panko-breaded chicken with tonkatsu sauce', price: '$24', image: sashimiImage },
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('menuTitle')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our carefully crafted dishes that blend traditional Japanese flavors with modern presentation
            </p>
          </div>

          <div className="space-y-16">
            {menuItems.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-primary">
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group">
                      <div className="relative">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {item.featured && (
                          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                            Chef's Special
                          </Badge>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="text-xl font-semibold text-foreground">{item.name}</h4>
                          <span className="text-lg font-bold text-primary">{item.price}</span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;