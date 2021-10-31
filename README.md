# Patika.dev Hepsiburada Frontend Bootcamp - Case

[![CircleCI](https://circleci.com/gh/patika-hepsiburada-react-bootcamp/hbcase-berkcvlk-be/tree/main.svg?style=svg&circle-token=8667b99e8bdcfe906e471a2faea0e0959a7b6576)](https://circleci.com/gh/patika-hepsiburada-react-bootcamp/hbcase-berkcvlk-be/tree/main)

> Proje, study-case çalışmasının backend bölümünü içermektedir. Gerekli kurulum adımlarını takip ettikten sonra [frontend](https://github.com/patika-hepsiburada-react-bootcamp/hbcase-berkcvlk-fe) projesinin de kurulumunu yapınız.

## Kurulum - Local

Uygulamayı localde çalıştırabilmek için:

```
git clone https://github.com/patika-hepsiburada-react-bootcamp/hbcase-berkcvlk-be.git

cd hbcase-berkcvlk-be
npm install
npm run dev
```

Adımları tamamladıktan sonra projeyi <b>localhost:3000</b> 'de görüntülemelisiniz.

## Kurulum - Docker

Uygulamayı container üzerinde çalıştırmak için:

#### Gereklilikler

- Docker Compose

```
// Projeyi klonlayıp anadizine gittikten sonra
docker-compose up -d

// Çalışan image'i görüntülemek için
docker ps
```

Projeyi <b>localhost:8080</b> 'de görüntülemelisiniz.
Projeyi durdurmak için: `docker-compose down`

> Uygulamanın frontend tarafının çalışabilmesi için, backend projesinin çalıştığı adresi (örn. http://localhost:3000) `.env` dosyasında `REACT_APP_API_ENDPOINT` değişkenine atamayı unutmayın.

## Test

Uygulama testlerini çalıştırmak için:

```
npm run test
```
