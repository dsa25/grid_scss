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
.ma {margin: auto}
.mla {margin-left: auto}
.mta {margin-top: auto}
.mra {margin-right: auto}
.mba {margin-bottom: auto}
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


##### прописывал какие  классы нужны и сколько)
 ```scss

$i: -5;
$step: 5;
@while $i <= 25 {
    $i: $i + $step;
    .m#{$i} {margin: #{$i}px}
    .mt#{$i} {margin-top: #{$i}px}
    .mr#{$i} {margin-right: #{$i}px}
    .mb#{$i} {margin-bottom: #{$i}px}
    .ml#{$i} {margin-left: #{$i}px}
    .p#{$i} {padding: #{$i}px}
    .pt#{$i} {padding-top: #{$i}px}
    .pr#{$i} {padding-right: #{$i}px}
    .pb#{$i} {padding-bottom: #{$i}px}
    .pl#{$i} {padding-left: #{$i}px}
}
    /* ... */
```


##### комментрировал что не нужно
 ```scss

 /* ... */
 $points: (
     xl: infinite,
        lg: 1220px,
        // md: 980px,
        // sm: 760px,
        // xs: 480px,
);
 /* ... */
  @else{
      
      @media only screen and (max-width: $point) {
          
          @while $i <= 100 {
              #{$class}#{$i} {width: $i + 0%}
                $i: $i + $step;
            }

            .show_#{$key} {display: block}
            .hide_#{$key} {display: none}
/* ... */
```

##### и получал что то подобное: 
 ```css
  /* ... */
.pl25 { padding-left: 25px; }
.pl30 { padding-left: 30px; }

.xl_0 { width: 0%; }
.xl_5 { width: 5%; }
.xl_10 { width: 10%; }
.xl_15 { width: 15%; }
.xl_20 { width: 20%; }


 /* ... */

@media only screen and (max-width: 1220px) { .lg_0 { width: 0%; }
  .lg_5 { width: 5%; }
  .lg_10 { width: 10%; }
  .lg_15 { width: 15%; }
 /* ... */
 .show_lg { display: block; }
  .hide_lg { display: none; }
  .flex_lg { display: flex; }
  .inline_flex_lg { display: inline-flex; }
  .fdc_lg { flex-direction: column; }
  .fdcr_lg { flex-direction: column-reverse; }
  .fdr_lg { flex-direction: row; }
 /* ... */
```
