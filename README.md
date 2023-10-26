# ESW Docs
- [Общее](#common)
- [Реализация виджета](#impl)
  - [Простейший виджет](#simplew)
  - [Использование TS](#ts)
  - [Исходный код и примеры](#sourcecode)
  - [Хуки жизненного цикла](#lch)
    - [IsValid](#eswIsValid)
    - [AfterUnmount](#eswAfterUnmount)
    - [OnSettingsChange](#eswOnSettingsChange)
  - [Вывод настроек для провайдера](#provider)
    - [Запись в модель документа](#docWrite)
    - [Справочники](#catalogs)
    - [Другие настройки](#other)
  - [Использование бибилотек и фреймворков](#frameworks)
  - [Ограничения](#limitation)


# Общее <a name="common"></a>
Платформа nocode имеет возможность встраивания виджетов. Виджет - это программный код выполняющийся на стороне нашей платформы. Виджет может отображать данные, делать запросы на сторонние ресурсы, взаимодействовать с сущностями платформы nocode

# Реализация виджета <a name="impl"></a>
## Простейший виджет <a name="simplew"></a>
Сначала вам нужно реализовать сам виджет. Виджет - это js файл. Так выглядит самый простой виджет, который выводит на экран текст "Hello, world"
``` ts
window.eswInit = () => {
  return new SimpleWidget();
};

class SimpleWidget {
  constructor() {
    const renderRoot: HTMLElement = getEswNamespace().renderRoot;
    renderRoot.innerText = "Hello, NoCode!";
  }
}

```
Наша платформа при работе с вашим файлом рассчитывает на наличие глобальной функции eswInit, которая возвращает инстанс виджета. Далее у этого инстанса будут вызываться хуки жизненного цикла.

##  Использование TypeScript <a name="ts"></a> 
Мы предоставляем [npm пакет](https://www.npmjs.com/package/@artsofte/esw) с декларациями типов сущностей платформы. Загрузить его можно с помощью команды
```
npm i @artsofte/esw
```

## Исходный код и примеры <a name="sourcecode"></a>
С кодом библиотеки `@artsofte/esw` можно ознакомиться на [Github](https://github.com/Abanking/esw). Также можете ознакомиться с примерами виджетов [Examples](https://github.com/Abanking/esw/tree/main/examples/)

## Хуки жизненного цикла виджета <a name="lch"></a>
### EswIsValid <a name="eswIsValid"></a>
Пример использования:
``` ts
import { EswIsValid } from "@artsofte/esw";

window.eswInit = () => {
  return new SimpleWidget();
};

class SimpleWidget implements EswIsValid {
  public eswIsValid(): boolean {
    return true;
  }
}
```
При попытке клиента перехода на следующий шаг - виджеты на форме должны быть валидными. Если виджет не валиден, то система не позволяет пройти на следующий шаг. Если ваш виджет реализует интерфейс `EswIsValid`, то при попытке перехода на следующий шаг будет вызван метод `eswIsValid`.

### EswAfterUnmount <a name="eswAfterUnmount"></a>
Пример использования:
``` ts
import { EswAfterUnmount } from "@artsofte/esw";

window.eswInit = () => {
  return new SimpleWidget();
};

class SimpleWidget implements EswAfterUnmount {
  private intervalId: number;

  constructor() {
    this.intervalId = setInterval(() => console.log("Hello, world"), 1000);
  }

  public eswAfterUnmount(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}

```
Хук, обозначающий, что разметка вашего виджета уже удалена из DOM. Чаще всего используется для очистки таймеров, подписок.

### EswOnSettingsChange <a name="eswOnSettingsChange"></a>
Пример использования:
``` ts
import { Catalog, EswOnSettingsChange, GetSettingsReturn } from "@artsofte/esw";

interface IWidgetSettings {
  catalog: Catalog<{ name: string; value: string }>;
}

window.eswInit = (config: IWidgetSettings) => {
  return new CatalogReader(config);
};

window.eswInitSettings = (): GetSettingsReturn => {
  return {
    version: "v1",
    settings: [
      {
        type: "catalog",
        label: "Отображаемый каталог",
        saveTo: "catalog",
      },
    ],
  };
};

class CatalogReader implements EswOnSettingsChange {
  private readonly renderRoot: HTMLElement = getEswNamespace().renderRoot;

  constructor(private config: IWidgetSettings) {}

  public eswOnSettingsChange(config: IWidgetSettings): void {
    this.config = config;
    this.renderCatalogData();
  }

  private renderCatalogData(): void {
    this.config.catalog.content().then((data) => {
      this.renderRoot.innerText = JSON.stringify(data);
    });
  }
}

```
Данный хук вызывается при каждом изменении настроек в правом сайд-баре со стороны провайдера. Стоит обратить внимание на то, что данный хук не будет ни разу вызван при рендеринге виджета на клиентской форме.

## Вывод настроек для провайдера <a name="provider"></a>
Платформа имеет встроенные механизмы справочников, модели документа и другие. Виджету требуется взаимодействие с ними. Всегда доступ к тем или иным сущностям выдает провайдер в правом сайд-баре. 
Например, виджет хочет записывать данные в модель документа. Тогда провайдер в правом сайде-баре выбирает область в модели документа, куда виджет имеет право писать данные. Другой пример, виджет хочет получить доступ до каталога: провайдер выбирает к какому каталогу именно виджет имеет доступ.
Чтобы указать, какие настройки требуются - реализуйте глобальную функцию `eswInitSettings`. У каждой настройки есть параметр saveTo, этот параметр обозначает путь, куда в конфиге буду сохранены данные.
``` ts
window.eswInitSettings = (): EswSettingsDeclaration => {
    return {
        version: "v1",
        settings: [
            {
                ...,
                saveTo: "param"
            }
        ]
    }
}

interface WidgetSettings {
    param: ... 
}

window.eswInit = (config: WidgetSettings) => {
    ...
}
```
Важно понимать, что при рендеринге на стороне провайдера config в метод eswInit будет пустым, так как провайдер еще не выбрал настройки. Объект будет наполняться по мере наполнения настроек провайдером.

### Запись в модель документа <a name="docWrite"></a>
Виджет может записывать данные в модель документа. Для этого виджет должен вернуть требуемые настройки в методе `initSettings`
``` ts
import {
  DocumentElement,
  EswAfterUnmount,
  GetSettingsReturn,
} from "@artsofte/esw";

window.eswInit = (config: IWidgetSettings) => {
  return new SimpleWidget(config);
};

interface IWidgetSettings {
  documentToken: DocumentElement<{ someData: string }>;
}

window.eswInitSettings = (): EswSettingsDeclaration => {
  return {
    version: "v1",
    settings: [
      {
        type: "documentElementWrite",
        label: "Запись в модель документа",
        saveTo: "documentToken",
        isRequired: true,
      },
    ],
  };
};

class SimpleWidget implements EswAfterUnmount {
  private readonly renderRoot: HTMLElement = getEswNamespace().renderRoot;

  private readonly intrevalId: number = 0;

  constructor(config: IWidgetSettings) {
    const isProvider = getEswNamespace().env.isProvider;

    if (isProvider) {
      this.renderProviderView();

      return;
    }

    let count = 0;

    this.intrevalId = setInterval(() => {
      count += 1;
      config.documentToken.patch("count", { value: count });
      this.renderRoot.innerHTML = `Count: ${count}`;
    }, 1000);
  }

  public eswAfterUnmount() {
    clearInterval(this.intrevalId);
  }

  private renderProviderView() {
    this.renderRoot.innerHTML = "Виджет патчит документ каждую секунду";
  }
}
```
### Справочники <a name="catalogs"></a>
Виджет может читать данные из справочника, который к нему привяжет провайдер
``` ts
import { Catalog, GetSettingsReturn } from "@artsfote/esw";

interface IWidgetSettings {
  catalog: Catalog<{ name: string; value: string }>;
}

window.eswInit = (config: IWidgetSettings) => {
  return new CatalogReader(config);
};

window.eswInitSettings = (): EswSettingsDeclaration => {
  return {
    version: "v1",
    settings: [
      {
        type: "catalog",
        label: "Отображаемый каталог",
        saveTo: "catalog",
      },
    ],
  };
};

class CatalogReader {
  private readonly renderRoot: HTMLElement = getEswNamespace().renderRoot;

  constructor(config: IWidgetSettings) {
    const isProvider = getEswNamespace().env.isProvider;

    if (isProvider) {
      this.renderProviderView();
    } else {
      config.catalog.content()
        .then((data) => this.render(data))
        .catch(() => this.renderError());
    }
  }

  private renderProviderView(): void {
    this.renderRoot.innerHTML = "Отображение каталогов";
  }

  private render(data: any): void {
    this.renderRoot.innerHTML = JSON.stringify(data);
  }

  private renderError(): void {
    this.renderRoot.innerHTML = "Ошибка чтения справочника";
  }
}
```

### Другие настройки <a name="other"></a>
- `select` отображение селекта. В `saveTo` будет записан `SelectItem`

## Использование бибилотек и фреймворков <a name="frameworks"></a>
Разработчик виджета может использовать любые доступные технологии. В директории [examples](https://github.com/Abanking/esw/tree/main/examples) есть примеры использования некоторых технологий.
Платформа разрешает загружать как единый JS бандл, так и дает возможность загрузки множества скриптов по url.
Нужно учесть, что рендеринг вашего скрипта происходит в shadow root, поэтому, нужно указать вашей библиотеке/фреймворку в какой именно HTML узел помещать разметку. Сам этот HTML узел можно получить вызвав следующий код: `getEswNamespace().renderRoot`

## Ограничения <a name="limitation"></a>
Рендеринг вашего html происходит вне встроенного iframe, а в рамках основного DOM в shadow-root. Это значит, что существует две разные среды JS, а значит разные инстансы глобальных объектов. Например, вы прослушиваете событие клика по кнопке. К прослушиванию добавляете callback, который принимает event с типом `MouseEvent`. Событие происходит в рамках основного DOM и передается в функцию, которая работает в рамках iframe. Поэтому проверка `event instanceof MouseEvent` не сработает. Так как event был создан в рамках основного окна и в прототипе лежит ссылка на MouseEvent основного окна. А вы совершаете проверку с MouseEvent вашего окна, в котором свои глобальные объект, никак не связанные с глобальными объектами основного окна. 

Также часто можно наблюдать, когда создается прослушиватель на весь документ (`document.addEventListener('click', () => {})`). Это не будет работать в рамках виджета, так как `document` будет являться документом айфрейма. А так как iframe находится в head секции основного DOM, то клик по нему никогда не происходит. Нужно создавать прослушиватели только на свой корневой div элемент. Получить его можно при помощи `getEswNamespace().renderRoot`
