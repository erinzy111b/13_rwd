對於 xs 使用固定格式 {property}{sides}-{size} 命名，對於 sm、md、lg、xl 和 xxl，使用格式 {property}{sides}-{breakpoint}-{size} 命名。


property 設定:

m - 設定 margin 的類別
p - 設定 padding 的類別
sides 設定:

t - 設定 margin-top 或是 padding-top 的類別
b - 設定 margin-bottom 或是 padding-bottom 的類別
s - (start) 在 LTR 設定 margin-left 或是 padding-left， RTL 設定 margin-right 或是 padding-right
e - (end) 在 LTR 設定 margin-right or padding-right， RTL 設定 margin-left 或是 padding-left
x - 同時設定 *-left 和 *-right
y - 時設定 *-top 和 *-bottom
blank - 同時設定 margin 或 padding 在元素的四個邊緣
size 設定:

0 - 設定 margin 或是 padding 為 0
1 - (預設) 設定 margin 或是 padding 為 $spacer * .25
2 - (預設) 設定 margin 或是 padding 為 $spacer * .5
3 - (預設) 設定 margin 或是 padding 為 $spacer
4 - (預設) 設定 margin 或是 padding 為 $spacer * 1.5
5 - (預設) 設定 margin 或是 padding 為 $spacer * 3
auto - 設定 margin 為 auto
