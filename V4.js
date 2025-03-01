/* 成冰紀中古擬音 v4.C2.1
 * 此擬音不具有任何科學性，請勿在任何公共場合展示、朗讀、討論此擬音，否則後果自負！
 * 請勿透露、討論、詢問、搜索任何有關此作者的信息。
 * 使用此擬音代碼進行推導之後，請立即呼吸大量新鮮空氣，並用大量清水清洗雙手、眼部、口腔等。
 *
 * @author Cryoballuz
 */
 
const is = (...x) => 音韻地位.屬於(...x);
const when = (...x) => 音韻地位.判斷(...x);

if (!音韻地位) return [
 ['小舌化聲母形式', [2, 'ᵱ/q', 'p̙/k̙']],
 ['二等記號', [1, '捲舌符號 ◌˞', '咽化符號 ◌ˤ']],
 ['通江宕攝韻尾', [1, '默認', 'ŋʷ/kʷ', 'ŋ/k']], //“默認”的意思就是在“小舌化聲母形式”裡面選的形式
 ['聲調記號', [1, '五度記號', 'ˀ/ʰ', '無']],
];
 

function get聲母_默認拼寫() {
 const 無 = {
    幫: 'p', 滂: 'pʰ', 並: 'b', 明: 'm',
	端: 't', 透: 'tʰ', 定: 'd', 泥: 'n', 來: 'l',
    知: 'ʈ', 徹: 'ʈʰ', 澄: 'ɖ', 孃: 'ɳ', 
    見: 'k', 溪: 'kʰ', 羣: 'ɡ', 疑: 'ŋ', 云: 'w',
    影: 'ʔ', 曉: 'x',
    精: 'ts', 清: 'tsʰ', 從: 'dz', 心: 's', 邪: 'z',
    莊: 'tʂ', 初: 'tʂʰ', 崇: 'dʐ', 生: 'ʂ', 俟: 'ʐ',
    章: 'tɕ', 昌: 'tɕʰ', 常: 'dʑ', 書: 'ɕ', 船: 'ʑ', 日: 'ɲ', 以: 'j',
  };
  const 有 = {
    幫: 'p̙', 滂: 'p̙ʰ', 並: 'b̙', 明: 'm̙',
    來: 'l̙',
    見: 'k̙', 溪: 'k̙ʰ', 疑: 'ŋ̙',
    影: 'ʡ', 曉: 'x̙', 匣: 'ɣ̙',
  };
  if (is('云母 開口')) return '';
  if (is('三等')) return 無[音韻地位.母] || 有[音韻地位.母];
  return 有[音韻地位.母] || 無[音韻地位.母];
}

function get聲母() {
 let 聲母 = get聲母_默認拼寫();
  if (選項.小舌化聲母形式 == 'ᵱ/q') {
    聲母 = 聲母.replace('p̙','ᵱ').replace('b̙','ᵬ').replace('m̙','ᵯ')
	.replace('k̙','q').replace('ŋ̙','ɴ').replace('x̙','χ').replace('ɣ̙','ʁ')
	.replace('l̙','ɫ');
  }
  return 聲母;
}


function get韻母() {
  const 韻 = when([
    ['', 音韻地位.韻],
  ]);
  const 推導韻到元音 = [
    //0  m/p  n/t  ŋ̘/k̙  ŋ/k  u  i  
    ['歌談寒唐　豪泰','ɑ'],
    ['麻銜刪　庚肴　','a'],
    ['脂侵真　　幽　','i'],
    ['之　殷　蒸尤微','ɯ'], //實際上應該更加靠前，但是寫成ɨ我看不清楚，眼睛有問題。
    ['侯　文東　　　','u'],
    ['　覃　　　　咍','ʌ'],
    ['佳咸山　耕　皆','ɛ'],
    ['　添先　青蕭齊','e'],
    ['模　魂冬　　灰','o'],
    ['　　痕　登　　','ɤ'],
    ['魚　　　　　　','ɯɤ'],
    ['　　　江　　　','ɞ'],
    ['　　　　　　夬','ua'],
    ['　凡　　　　廢','uʌ'],
    ['虞　　鍾　　　','uo'],
    ['　　　　清　　','ia'],
    ['支鹽仙　　宵祭','ie'],
    ['　　　陽　　　','ɯɑ'],
    ['　嚴元　　　　','ɯʌ'],
    ['　　臻　　　　','ɯi'], 
  ]; //這裡只給明顯高化的三等加了介音，本來就是銳音的用i，圓唇的用u，其餘用ɯ。
  const 韻尾列表 = ['', 'm/p', 'n/t', 'ŋ̙/k̙', 'ŋ/k', 'u', 'i'];
  let 匹配行 = 推導韻到元音.find(e => e[0].includes(韻));
  let 元音 = 匹配行[1];
  let 韻尾 = 韻尾列表[匹配行[0].indexOf(韻)].split('/')[+is('入聲')]
  if (選項.通江宕攝韻尾 == 'ŋʷ/kʷ') {
	韻尾 = 韻尾.replace('k̙','kʷ').replace('ŋ̙','ŋʷ')};
  if (選項.通江宕攝韻尾 == 'ŋ/k') {
	韻尾 = 韻尾.replace('k̙','k').replace('ŋ̙','ŋ')};
  if (選項.小舌化聲母形式 == 'ᵱ/q') {
  韻尾 = 韻尾.replace('k̙','q').replace('ŋ̙','ɴ')};
  
   if (元音[0] === 'ɯ') {
    if (is('合口 或 云母 或 幫組 非 支宵侵蒸韻')) {
      元音 = 元音.replace('ɯ', 'u');
    }
  } else if (is('合口 非 云母 非 侯文東模魂冬灰夬凡廢虞鍾韻')) {
    元音 = 'w' + 元音; 
    }
   if (is('東韻 三等 非 幫組 非 云母')){
	 元音 = 元音.replace('u','ɯu');
   }
   if (is('麻韻 三等')){
	 元音 = 元音.replace('a','ia');
   }
   if (is('非 云母')){元音 = 元音.replace('wu','u')}
   元音 = 元音.replace('uu','u').replace('ii','i').replace('ɯɯ','ɯ').replace('ww','w');
   韻尾 = 韻尾.replace(元音.slice(-1), ''); //刪去重複的內容，但是兩個不是一樣的嗎？
   if (is('二等 非 知莊組')){
	if (is('麻銜刪庚肴韻') &&字頭 !== '打'){
	  元音 = 元音.replace('a','a˞');
	}
    if (is('佳咸山耕皆韻')){
	  元音 = 元音.replace('ɛ','ɛ˞');
	}
    if (is('江韻')){
	  元音 = 元音.replace('ɞ','ɞ˞');
	}
   }
   if (is('B類 非 莊組 非 孃母')){
	if (is('庚韻')){
	  元音 = 元音.replace('a','ɹa');
	}
	if (is('脂侵真韻')){
	  元音 = 元音.replace('i','ɹi');
  }
  if (is('幽支鹽仙宵祭韻')){
	  元音 = 元音.replace('i','ɹ');
	}
    if (is('之殷蒸尤微陽臻韻')){
	  元音 = 元音.replace('ɯ','ɹɯ');
	}
   }
   if (字頭 == '冷'){
	  元音 = 元音.replace('a˞','a');
   }
   if (選項.二等記號 == '咽化符號 ◌ˤ'){
   元音 = 元音.replace('˞','ˤ');
   }
   if (元音 === 'ɯ' && is('蒸韻 A類')) {
    元音 = 'i' + 元音;
  }    // 如果明確說了是A的話，我也不知道是不是真的有。
     return 元音 + 韻尾;
}


function get聲調() {
 if (選項.聲調記號 == '五度記號') {
 return ['˧˩','˥','˨˦','˨˧',]['平上去入'.indexOf(音韻地位.聲)];
 }
 if (選項.聲調記號 == 'ˀ/ʰ') {
 return ['','ˀ','ʰ','',]['平上去入'.indexOf(音韻地位.聲)];
 }if (選項.聲調記號 == '無') {
 return ['','','','',]['平上去入'.indexOf(音韻地位.聲)];
 }
}

return get聲母() + get韻母() + get聲調();
