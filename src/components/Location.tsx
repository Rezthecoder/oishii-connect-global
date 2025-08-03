import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Location = () => {
  const { t } = useLanguage();

  return (
    <section id="location" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('location')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Visit us at our convenient downtown location
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <Card className="shadow-card hover:shadow-card-hover transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground">Address</h3>
                    </div>
                    <p className="text-muted-foreground">
                      123 Downtown Street<br />
                      Tokyo, Japan 100-0001
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-card hover:shadow-card-hover transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground">Phone</h3>
                    </div>
                    <p className="text-muted-foreground">+81 3-1234-5678</p>
                  </CardContent>
                </Card>

                <Card className="shadow-card hover:shadow-card-hover transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground">{t('hours')}</h3>
                    </div>
                    <div className="text-muted-foreground text-sm space-y-1">
                      <p>{t('mondayFriday')}</p>
                      <p>{t('weekend')}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card hover:shadow-card-hover transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                    </div>
                    <p className="text-muted-foreground">info@oishiiconnect.com</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Google Maps */}
            <div className="relative">
              <Card className="overflow-hidden shadow-card-hover">
                <CardContent className="p-0">
                  <div className="relative h-80 bg-muted">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8280708515424!2d139.76493841525853!3d35.68123993019625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2sTokyo%20Station!5e0!3m2!1sen!2sjp!4v1635787654321!5m2!1sen!2sjp"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;