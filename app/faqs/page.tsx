"use client";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export default function FaqPage() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Hansı növ bizneslər üçün veb sayt xidmətləri təqdim edirsiniz?</AccordionTrigger>
          <AccordionContent>
            Biz restoranlar, kafelər, daşınmaz əmlak agentlikləri, elektron ticarət mağazaları, gözəllik salonları, bərbərxanalar, peşəkar konsaltinq xidmətləri və bir çox digər kiçik və orta ölçülü müəssisələr üçün fərdiləşdirilmiş həllər təklif edirik. Hər hansı bir biznes ehtiyacınız üçün bizimlə əlaqə saxlayın.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Sıfırdan tamamilə xüsusi hazırlanmış veb sayt yarada bilərəm?</AccordionTrigger>
          <AccordionContent>
            Bəli. Əsasən hazır və sürətli həllər təklif etsək də, sıfırdan sifarişlə hazırlanmış dizayn və proqram təminatı xidməti də təqdim edə bilərik. Ehtiyaclarınızı müzakirə etmək üçün bizimlə əlaqə saxlayın.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Veb saytımı nə qədər tez əldə edə bilərəm?</AccordionTrigger>
          <AccordionContent>
          Bizə bütün lazımi məlumatları (loqo, mətnlər, fotoşəkillər və s.) təqdim etdikdən sonra veb saytınız orta hesabla 5-10 iş günü ərzində hazır olacaq.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Veb sayt sifariş prosesi necə işləyir?</AccordionTrigger>
          <AccordionContent>
            1. Əlaqə: Bizimlə əlaqə saxlayın və ehtiyaclarınızı təsvir edin.<br />
            2. Qiymət təklifi və dizayn seçimi: Uyğun bir paket və şablon tövsiyə edəcəyik.<br />
            3. Təsdiq və ödəniş: Qiymət təklifini təsdiqləyin və ödəniş edin.<br />
            4. Məzmun toplanması: Veb saytınız üçün mətni, fotoları və loqonu toplayırıq.<br />
            5. Dizayn və inkişaf: Veb saytınızı hazırlayırıq.<br />
            6. Çatdırılma və paylaşma: Son versiyanı təqdim edirik.<br />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Ödəniş şərtləriniz nələrdir?</AccordionTrigger>
          <AccordionContent>
            Biz, adətən, layihəyə başlayarkən depozit, veb sayt çatdırıldıqda isə qalan məbləği ödəməklə işləyirik.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>Veb saytım paylaşıldıqdan sonra texniki dəstək verirsiniz?</AccordionTrigger>
          <AccordionContent>
            Bəli, veb saytınızın problemsiz işləməsi üçün texniki dəstək və texniki xidmət xidmətləri təklif edirik. Paketlərimiz haqqında ətraflı məlumat üçün bizimlə əlaqə saxlayın.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  