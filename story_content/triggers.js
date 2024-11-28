function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6LMbBWKz3PT":
        Script1();
        break;
      case "61cXSR3LPPg":
        Script2();
        break;
      case "62Hs79mtzJU":
        Script3();
        break;
      case "5jqvIAnHp1R":
        Script4();
        break;
      case "5uVNTtVvIxQ":
        Script5();
        break;
      case "5yGMtptG5Ju":
        Script6();
        break;
      case "6J2tUacCKDy":
        Script7();
        break;
      case "6Lm92e5Iz6r":
        Script8();
        break;
      case "6WoN0t8nAVv":
        Script9();
        break;
      case "6SjG5tWwNX8":
        Script10();
        break;
      case "6hrKM3OhKpc":
        Script11();
        break;
      case "6IN5I3szxz2":
        Script12();
        break;
      case "6ikGS8wRRev":
        Script13();
        break;
      case "5X9GQLBOzNW":
        Script14();
        break;
      case "6kjoaTXcNzr":
        Script15();
        break;
      case "6lIHVGToL2p":
        Script16();
        break;
      case "5aBgWIegRTu":
        Script17();
        break;
      case "5lO5y7HXqpc":
        Script18();
        break;
      case "6VVDnRP3DDt":
        Script19();
        break;
      case "5uzQLyQoWXi":
        Script20();
        break;
      case "6SVHoEvOoGH":
        Script21();
        break;
      case "5pnEYlsBfiD":
        Script22();
        break;
      case "6ZLTsqzoEN3":
        Script23();
        break;
      case "6fYvDfqH7KU":
        Script24();
        break;
      case "5gMUX8WksO4":
        Script25();
        break;
      case "5ZTov9O1cuk":
        Script26();
        break;
      case "64BI1RYaWXM":
        Script27();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('6f7FyWcVZzD');
const duration = 750;
const easing = 'ease-out';
const id = '6QCDU2x8ktB';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  player.once(() => {
const target = object('6f7FyWcVZzD');
const duration = 750;
const easing = 'ease-out';
const id = '6QCDU2x8ktB';
const pulseAmount = 0.1;
const delay = 1000;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  const target = object('5YBHlrHAgZn');
const duration = 750;
const easing = 'ease-out';
const id = '5yHkvyiCp9A';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('5ts8S5pp1Jv');
const duration = 750;
const easing = 'ease-out';
const id = '61Qiq5qAVB8';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('6E0wQK9kFHb');
const duration = 750;
const easing = 'ease-out';
const id = '6LjqyEe2oF5';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('5swUbikXScw');
const duration = 750;
const easing = 'ease-out';
const id = '667LViUvVy3';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  const target = object('5sGjJRZGPXd');
const duration = 750;
const easing = 'ease-out';
const id = '6REFHOmCuNT';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  const target = object('6E0wQK9kFHb');
const duration = 750;
const easing = 'ease-out';
const id = '6LjqyEe2oF5';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  const target = object('6f7FyWcVZzD');
const duration = 750;
const easing = 'ease-out';
const id = '6QCDU2x8ktB';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script10 = function()
{
  const target = object('6f7FyWcVZzD');
const duration = 750;
const easing = 'ease-out';
const id = '6QCDU2x8ktB';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script11 = function()
{
  const target = object('6f7FyWcVZzD');
const duration = 750;
const easing = 'ease-out';
const id = '6QCDU2x8ktB';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script12 = function()
{
  player.once(() => {
const target = object('5i3wSQwN5z4');
const duration = 750;
const easing = 'ease-out';
const id = '6A2NKCPji7Q';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script13 = function()
{
  const target = object('5i3wSQwN5z4');
const duration = 750;
const easing = 'ease-out';
const id = '6A2NKCPji7Q';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script14 = function()
{
  player.once(() => {
const target = object('6oCy6LpipHj');
const duration = 750;
const easing = 'ease-out';
const id = '69Y0mYRHRi1';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script15 = function()
{
  const target = object('6oCy6LpipHj');
const duration = 750;
const easing = 'ease-out';
const id = '69Y0mYRHRi1';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script16 = function()
{
  const target = object('6h0YeAXe1qd');
const duration = 750;
const easing = 'ease-out';
const id = '6TDHbAWwjaG';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script17 = function()
{
  const target = object('5mxmujGlOtT');
const duration = 750;
const easing = 'ease-out';
const id = '6WSj6XK3Wmj';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script18 = function()
{
  const target = object('5mqmT2qwHuD');
const duration = 750;
const easing = 'ease-out';
const id = '6MBAMbUzAw6';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script19 = function()
{
  const target = object('5ovhGQFaN2B');
const duration = 750;
const easing = 'ease-out';
const id = '5cSBXwsYpya';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script20 = function()
{
  const target = object('5uZM641lEcN');
const duration = 750;
const easing = 'ease-out';
const id = '6FWXa8XKt4m';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script21 = function()
{
  const target = object('64YeTCwSohx');
const duration = 750;
const easing = 'ease-out';
const id = '5scmw9FgzQs';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script22 = function()
{
  const target = object('6PgIITAbEiq');
const duration = 750;
const easing = 'ease-out';
const id = '5wfaMN8LS5n';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script23 = function()
{
  const target = object('6lIZjEmkbUu');
const duration = 750;
const easing = 'ease-out';
const id = '5czN5bRIpaz';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script24 = function()
{
  const target = object('6EXzt1H7vk5');
const duration = 750;
const easing = 'ease-out';
const id = '6hpPamQjnpB';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script25 = function()
{
  const target = object('5oDMZ91IL76');
const duration = 750;
const easing = 'ease-out';
const id = '6hpPamQjnpB';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script26 = function()
{
  const target = object('5jbIsp1NsPb');
const duration = 750;
const easing = 'ease-out';
const id = '5i2gGuQY334';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
