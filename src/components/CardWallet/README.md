# CardWallet Component

Компонент кошелька для отображения баланса монет и возможности сохранения в сейф.

## Использование

```tsx
import { CardWallet } from '@components';

// Базовое использование
<CardWallet 
  data={{
    totalAmount: 1024,
    safeAmount: 300
  }}
  onSaveToSafe={() => {
    console.log('Сохранение в сейф');
  }}
/>

// С кастомными текстами
<CardWallet 
  data={{
    totalAmount: 1024,
    safeAmount: 300,
    title: 'Мой кошелек',
    safeLabel: 'Положить в сейф',
    buttonText: 'Положить'
  }}
  onSaveToSafe={handleSaveToSafe}
/>
```

## Props

### data
- `totalAmount` (number) - Общая сумма монет в кошельке
- `safeAmount` (number) - Сумма для сохранения в сейф
- `title?` (string) - Заголовок компонента (по умолчанию: "Мой кошелек")
- `safeLabel?` (string) - Подпись для блока сейфа (по умолчанию: "Положить в сейф")
- `buttonText?` (string) - Текст кнопки (по умолчанию: "Положить")

### cn?
- `margin?` (string) - Дополнительные CSS классы для отступов

### onSaveToSafe?
- Функция-колбэк, вызываемая при нажатии на кнопку "Положить"

## Особенности

- Адаптивный дизайн
- Градиентный фон с декоративными элементами
- Эффекты при наведении на кнопку
- Форматирование чисел с разделителями тысяч
- Использует backdrop-filter для эффекта размытия
