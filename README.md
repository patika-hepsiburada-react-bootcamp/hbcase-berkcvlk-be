# Patika.dev Hepsiburada Frontend Bootcamp - Case

[![CircleCI](https://circleci.com/gh/patika-hepsiburada-react-bootcamp/hbcase-berkcvlk-be/tree/main.svg?style=svg&circle-token=8667b99e8bdcfe906e471a2faea0e0959a7b6576)](https://circleci.com/gh/patika-hepsiburada-react-bootcamp/hbcase-berkcvlk-be/tree/main)

> Proje, study-case çalışmasının backend bölümünü içermektedir. Gerekli kurulum adımlarını takip ettikten sonra [frontend](https://github.com/patika-hepsiburada-react-bootcamp/hbcase-berkcvlk-fe) projesinin de kurulumunu yapınız.

## Kurulum - Local

Uygulamayı localde çalıştırabilmek için:

```
git clone https://github.com/patika-hepsiburada-react-bootcamp/hbcase-berkcvlk-be.git

cd hbcase-berkcvlk-be
npm install
npm start
```

Adımları tamamladıktan sonra projeyi <b>localhost:3000</b> 'de görüntülemelisiniz.

## Kurulum - Docker

Uygulamayı container üzerinde çalıştırmak için:

#### Gereklilikler

- Docker
- Docker Compose (isteğe bağlı)

<i>Docker ile</i>

```
// Projeyi klonladıktan sonra
cd hbcase-berkcvlk-be

docker build -t hbcase-backend-image .
docker run --name hbcase-backend-app -d -p 8080:3000 hbcase-backend-image
```

<i>Docker Compose ile</i>

```
// Projeyi klonlayıp anadizine gittikten sonra
docker-compose up -d
```

Projeyi <b>localhost:8080</b> 'de görüntülemelisiniz.
Projeyi durdurmak için: `docker-compose down` ya da `docker stop hbcase-backend-app`

> Uygulamanın frontend tarafının çalışabilmesi için, backend projesinin çalıştığı adresi (örn. http://localhost:3000) `.env` dosyasında `REACT_APP_API_ENDPOINT` değişkenine atamayı unutmayın.

## Test

Uygulama testlerini çalıştırmak için:

```
npm run test
```
