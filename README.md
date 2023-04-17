### scss
#### scss использовал для компиляции grid файлика, сейчас tailwind юзаю
##### для компилиции использовал приложение prepros

 ```css
 /* ... */
        .db{display: block;}
        .dib{display: inline-block;}
        .show_xl {display: block;}
        .hide_xl {display: none;}
        .flex{display: flex}
        .fdc{flex-direction: column}
        .jcsb{justify-content: space-between}
        .jcc{justify-content: center}
        .jcfe{justify-content: flex-end}
        .jcfs{justify-content: flex-start}
        .aic{align-items: center}
 /* ... */
```

#### названия классов как абревиатура свойств css  :  .jcsb{justify-content: space-between}

```html
<header>
  <div class="row flex jcsb aic">
    <a href="/" class="logo">logo</a>
    <div class="menu flex jcsb aic mla">
        <a href="/" class="active">item 1</a>
        <a href="/item2">item 2</a>
        <a href="/item3">item 3</a>
        <a href="/item4">item 4</a>
    </div>
  </div>
</header>
```