import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Star, Gift } from 'lucide-react';
import dishImage from '@/assets/dish-sashimi.jpg';

const News = () => {
  const { t } = useLanguage();

  const newsItems = [
    {
      title: 'Featured in Tokyo Food Magazine',
      date: 'March 15, 2024',
      category: 'Media',
      content: 'Oishii Connect was featured as one of the top 10 authentic Japanese restaurants in downtown Tokyo.',
      image: dishImage,
      icon: Star
    },
    {
      title: 'New Spring Menu Launch',
      date: 'March 10, 2024',
      category: 'Menu Update',
      content: 'We are excited to introduce our new spring menu featuring seasonal ingredients and cherry blossom-inspired dishes.',
      image: dishImage,
      icon: Gift
    },
    {
      title: 'Award for Excellence in Service',
      date: 'February 28, 2024',
      category: 'Award',
      content: 'Proud to receive the Restaurant Excellence Award for outstanding customer service and authentic cuisine.',
      image: dishImage,
      icon: Star
    }
  ];

  const promotions = [
    {
      title: '20% Off Lunch Sets',
      description: 'Every weekday from 11:30 AM to 2:30 PM',
      validUntil: 'Valid until March 31, 2024',
      type: 'Lunch Special'
    },
    {
      title: 'Free Dessert with Dinner',
      description: 'Complimentary dessert with any dinner course over $50',
      validUntil: 'Valid until April 15, 2024',
      type: 'Dinner Special'
    },
    {
      title: 'Group Dining Discount',
      description: '15% off for parties of 6 or more',
      validUntil: 'Ongoing promotion',
      type: 'Group Special'
    }
  ];

  return (
    <section id="news" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* News Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {t('newsTitle')}
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Stay updated with our latest news, awards, and media coverage
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((item, index) => (
                <Card key={index} className="overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                      {item.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2 mb-3 text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>{item.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Promotions Section */}
          <div>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {t('promotionsTitle')}
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Take advantage of our current special offers and promotions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {promotions.map((promo, index) => (
                <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16">
                    <div className="absolute top-3 right-3 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Gift className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-4">{promo.type}</Badge>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{promo.title}</h3>
                    <p className="text-muted-foreground mb-4">{promo.description}</p>
                    <p className="text-sm text-primary font-medium">{promo.validUntil}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;