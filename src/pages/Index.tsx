import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const photos = [
    {
      id: 1,
      url: 'https://cdn.poehali.dev/projects/41180db3-86ad-42fb-83f4-217db6cb6ac9/files/4c5575cd-edb3-4884-9b2d-6c3dcd2f5d8a.jpg',
      title: 'Занятия с детьми',
    },
    {
      id: 2,
      url: 'https://cdn.poehali.dev/projects/41180db3-86ad-42fb-83f4-217db6cb6ac9/files/d721f547-cf56-41f4-822c-019269193f81.jpg',
      title: 'Летний лагерь',
    },
    {
      id: 3,
      url: 'https://cdn.poehali.dev/projects/41180db3-86ad-42fb-83f4-217db6cb6ac9/files/4c5575cd-edb3-4884-9b2d-6c3dcd2f5d8a.jpg',
      title: 'Творческая мастерская',
    },
  ];

  const news = [
    {
      id: 1,
      date: '15 ноября 2025',
      title: 'Открытие зимнего набора в отряд',
      category: 'Новости',
      excerpt: 'Приглашаем всех желающих присоединиться к нашей команде педагогов-добровольцев.',
    },
    {
      id: 2,
      date: '10 ноября 2025',
      title: 'Итоги осенней смены',
      category: 'Отчёты',
      excerpt: 'Подводим итоги успешной работы с детьми в осенних школьных лагерях.',
    },
    {
      id: 3,
      date: '5 ноября 2025',
      title: 'Методический семинар',
      category: 'События',
      excerpt: 'Состоялся обучающий семинар по новым педагогическим технологиям для бойцов.',
    },
  ];

  const categories = [
    { name: 'Методики', icon: 'BookOpen', count: 12 },
    { name: 'Мероприятия', icon: 'Calendar', count: 8 },
    { name: 'Обучение', icon: 'GraduationCap', count: 15 },
    { name: 'Творчество', icon: 'Palette', count: 10 },
  ];

  const links = [
    { title: 'ВКонтакте', url: '#', icon: 'ExternalLink' },
    { title: 'Telegram', url: '#', icon: 'ExternalLink' },
    { title: 'Документы', url: '#', icon: 'FileText' },
    { title: 'Контакты', url: '#', icon: 'Mail' },
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="https://cdn.poehali.dev/projects/41180db3-86ad-42fb-83f4-217db6cb6ac9/files/cd1a3c5d-e19a-480b-99dc-55d0513e0885.jpg"
                alt="Факел"
                className="h-10 w-10 object-contain flame-flicker"
              />
              <span className="text-xl font-bold">Факел</span>
            </div>
            <div className="hidden md:flex gap-6">
              {['Главная', 'Фото', 'Новости', 'Рубрики', 'Ссылки'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.toLowerCase() ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Вступить в отряд
            </Button>
          </div>
        </div>
      </nav>

      <section id="главная" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8 float-animation">
            <img
              src="https://cdn.poehali.dev/projects/41180db3-86ad-42fb-83f4-217db6cb6ac9/files/cd1a3c5d-e19a-480b-99dc-55d0513e0885.jpg"
              alt="Факел"
              className="h-32 w-32 mx-auto object-contain"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Педагогический отряд <span className="text-primary">Факел</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Зажигаем сердца детей знаниями и творчеством. Становись частью команды педагогов-добровольцев!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Icon name="Users" size={20} className="mr-2" />
              О нас
            </Button>
            <Button size="lg" variant="outline">
              <Icon name="Calendar" size={20} className="mr-2" />
              Мероприятия
            </Button>
          </div>

          <div className="mt-16 flex justify-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-sm text-muted-foreground">Бойцов отряда</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">12</div>
              <div className="text-sm text-muted-foreground">Лет работы</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5000+</div>
              <div className="text-sm text-muted-foreground">Детей</div>
            </div>
          </div>
        </div>
      </section>

      <section id="фото" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <Icon name="Camera" size={32} className="inline mr-3" />
            Фотогалерея
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <Card key={photo.id} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all">
                <div className="relative overflow-hidden">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-lg">{photo.title}</h3>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              <Icon name="Images" size={20} className="mr-2" />
              Смотреть всё
            </Button>
          </div>
        </div>
      </section>

      <section id="новости" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <Icon name="Newspaper" size={32} className="inline mr-3" />
            Новости и статьи
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item) => (
              <Card key={item.id} className="hover:shadow-xl transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">{item.category}</Badge>
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="рубрики" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <Icon name="Folders" size={32} className="inline mr-3" />
            Рубрики
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card
                key={category.name}
                className="hover:shadow-xl transition-all cursor-pointer hover:-translate-y-1 bg-card/80 backdrop-blur"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                    <Icon name={category.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-muted-foreground text-sm">{category.count} материалов</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="ссылки" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <Icon name="Link" size={32} className="inline mr-3" />
            Полезные ссылки
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {links.map((link) => (
              <a
                key={link.title}
                href={link.url}
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors group"
              >
                <span className="font-medium">{link.title}</span>
                <Icon
                  name={link.icon as any}
                  size={18}
                  className="text-muted-foreground group-hover:text-primary transition-colors"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <img
              src="https://cdn.poehali.dev/projects/41180db3-86ad-42fb-83f4-217db6cb6ac9/files/cd1a3c5d-e19a-480b-99dc-55d0513e0885.jpg"
              alt="Факел"
              className="h-12 w-12 mx-auto object-contain flame-flicker"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">Педагогический отряд Факел</h3>
          <p className="text-muted-foreground mb-6">Зажигаем сердца с 2013 года</p>
          <div className="flex justify-center gap-4 mb-6">
            <Button variant="outline" size="icon" className="rounded-full">
              <Icon name="Mail" size={18} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Icon name="Phone" size={18} />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">© 2025 ПО Факел. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
