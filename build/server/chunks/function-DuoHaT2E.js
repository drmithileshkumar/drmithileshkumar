import { r as randInt } from './common-CIVVH1Lv.js';
import { L as LinearQ } from './linearQ-Bd1RUua6.js';
import { Q } from './fraction-DfHHiAXd.js';
import { S as Sets } from './sets-jGIduNNd.js';

class TrigInt1 {
  //
  constructor(terms = {}) {
    this.terms = terms;
  }
  randT(k = 6) {
    this.terms = {
      "cos": {
        "c": new Q(),
        "a": new LinearQ()
      },
      "sin": {
        "c": new Q(),
        "a": new LinearQ()
      },
      "sec2": {
        "c": new Q(),
        "a": new LinearQ()
      },
      "cosec2": {
        "c": new Q(),
        "a": new LinearQ()
      },
      "sectan": {
        "c": new Q(),
        "a": new LinearQ()
      },
      "coseccot": {
        "c": new Q(),
        "a": new LinearQ()
      }
    };
    let partSet = new Sets(Object.keys(this.terms));
    let sub = partSet.krandomSubset(k);
    for (let i = 0; i < k; i++) {
      this.terms[sub.e[i]].c.randF(10, 10);
      this.terms[sub.e[i]].a.randL(10, 10, true);
    }
  }
  str() {
    let result = "";
    if (this.terms["cos"] && !this.terms["cos"].c.isZero()) {
      let angleCos = this.terms["cos"].a.str();
      if (this.terms["cos"].c.isOne()) result += "\\cos(" + angleCos + ")";
      else if (this.terms["cos"].c.isMinusOne()) result += "-\\cos(" + angleCos + ")";
      else {
        let coeffCos = this.terms["cos"].c.str();
        if (this.terms["cos"].c.isGZero()) result += result.length > 0 ? "+" + coeffCos + "\\cos(" + angleCos + ")" : coeffCos + "\\cos(" + angleCos + ")";
        else {
          result += "-" + new Q(-this.terms["cos"].c.num, this.terms["cos"].c.den).str() + "\\cos(" + angleCos + ")";
        }
      }
    }
    if (this.terms["sin"] && !this.terms["sin"].c.isZero()) {
      let anglesin = this.terms["sin"].a.str();
      if (this.terms["sin"].c.isOne()) result += "\\sin(" + anglesin + ")";
      else if (this.terms["sin"].c.isMinusOne()) result += "-\\sin(" + anglesin + ")";
      else {
        let coeffsin = this.terms["sin"].c.str();
        if (this.terms["sin"].c.isGZero()) result += result.length > 0 ? "+" + coeffsin + "\\sin(" + anglesin + ")" : coeffsin + "\\sin(" + anglesin + ")";
        else {
          result += "-" + new Q(-this.terms["sin"].c.num, this.terms["sin"].c.den).str() + "\\sin(" + anglesin + ")";
        }
      }
    }
    if (this.terms["sec2"] && !this.terms["sec2"].c.isZero()) {
      let anglesec2 = this.terms["sec2"].a.str();
      if (this.terms["sec2"].c.isOne()) result += "\\sec^2(" + anglesec2 + ")";
      else if (this.terms["sec2"].c.isMinusOne()) result += "-\\sec^2(" + anglesec2 + ")";
      else {
        let coeffsec2 = this.terms["sec2"].c.str();
        if (this.terms["sec2"].c.isGZero()) result += result.length > 0 ? "+" + coeffsec2 + "\\sec^2(" + anglesec2 + ")" : coeffsec2 + "\\sec^2(" + anglesec2 + ")";
        else {
          result += "-" + new Q(-this.terms["sec2"].c.num, this.terms["sec2"].c.den).str() + "\\sec^2(" + anglesec2 + ")";
        }
      }
    }
    if (this.terms["cosec2"] && !this.terms["cosec2"].c.isZero()) {
      let anglecosec2 = this.terms["cosec2"].a.str();
      if (this.terms["cosec2"].c.isOne()) result += "\\cosec^2(" + anglecosec2 + ")";
      else if (this.terms["cosec2"].c.isMinusOne()) result += "-\\cosec^2(" + anglecosec2 + ")";
      else {
        let coeffcosec2 = this.terms["cosec2"].c.str();
        if (this.terms["cosec2"].c.isGZero()) result += result.length > 0 ? "+" + coeffcosec2 + "\\cosec^2(" + anglecosec2 + ")" : coeffcosec2 + "\\cosec^2(" + anglecosec2 + ")";
        else {
          result += "-" + new Q(-this.terms["cosec2"].c.num, this.terms["cosec2"].c.den).str() + "\\cosec^2(" + anglecosec2 + ")";
        }
      }
    }
    if (this.terms["sectan"] && !this.terms["sectan"].c.isZero()) {
      let anglesectan = this.terms["sectan"].a.str();
      if (this.terms["sectan"].c.isOne()) result += "\\sec(" + anglesectan + ")\\tan(" + anglesectan + ")";
      else if (this.terms["sectan"].c.isMinusOne()) result += "-\\sec(" + anglesectan + ")\\tan(" + anglesectan + ")";
      else {
        let coeffsectan = this.terms["sectan"].c.str();
        if (this.terms["sectan"].c.isGZero()) result += result.length > 0 ? "+" + coeffsectan + "\\sec(" + anglesectan + ")\\tan(" + anglesectan + ")" : coeffsectan + "\\sec(" + anglesectan + ")\\tan(" + anglesectan + ")";
        else {
          result += "-" + new Q(-this.terms["sectan"].c.num, this.terms["sectan"].c.den).str() + "\\sec(" + anglesectan + ")\\tan(" + anglesectan + ")";
        }
      }
    }
    if (this.terms["coseccot"] && !this.terms["coseccot"].c.isZero()) {
      let anglecoseccot = this.terms["coseccot"].a.str();
      if (this.terms["coseccot"].c.isOne()) result += "\\cosec(" + anglecoseccot + ")\\cot(" + anglecoseccot + ")";
      else if (this.terms["coseccot"].c.isMinusOne()) result += "-\\cosec(" + anglecoseccot + ")\\cot(" + anglecoseccot + ")";
      else {
        let coeffcoseccot = this.terms["coseccot"].c.str();
        if (this.terms["coseccot"].c.isGZero()) result += result.length > 0 ? "+" + coeffcoseccot + "\\cosec(" + anglecoseccot + ")\\cot(" + anglecoseccot + ")" : coeffcoseccot + "\\cosec(" + anglecoseccot + ")\\cot(" + anglecoseccot + ")";
        else {
          result += "-" + new Q(-this.terms["coseccot"].c.num, this.terms["coseccot"].c.den).str() + "\\cosec(" + anglecoseccot + ")\\cot(" + anglecoseccot + ")";
        }
      }
    }
    if (this.terms["tan"] && !this.terms["tan"].c.isZero()) {
      let angletan = this.terms["tan"].a.str();
      if (this.terms["tan"].c.isOne()) result += "\\tan(" + angletan + ")";
      else if (this.terms["tan"].c.isMinusOne()) result += "-\\tan(" + angletan + ")";
      else {
        let coefftan = this.terms["tan"].c.str();
        if (this.terms["tan"].c.isGZero()) result += result.length > 0 ? "+" + coefftan + "\\tan(" + angletan + ")" : coefftan + "\\tan(" + angletan + ")";
        else {
          result += "-" + new Q(-this.terms["tan"].c.num, this.terms["tan"].c.den).str() + "\\tan(" + angletan + ")";
        }
      }
    }
    if (this.terms["cot"] && !this.terms["cot"].c.isZero()) {
      let anglecot = this.terms["cot"].a.str();
      if (this.terms["cot"].c.isOne()) result += "\\cot(" + anglecot + ")";
      else if (this.terms["cot"].c.isMinusOne()) result += "-\\cot(" + anglecot + ")";
      else {
        let coeffcot = this.terms["cot"].c.str();
        if (this.terms["cot"].c.isGZero()) result += result.length > 0 ? "+" + coeffcot + "\\cot(" + anglecot + ")" : coeffcot + "\\cot(" + anglecot + ")";
        else {
          result += "-" + new Q(-this.terms["cot"].c.num, this.terms["cot"].c.den).str() + "\\cot(" + anglecot + ")";
        }
      }
    }
    if (this.terms["sec"] && !this.terms["sec"].c.isZero()) {
      let anglesec = this.terms["sec"].a.str();
      if (this.terms["sec"].c.isOne()) result += "\\sec(" + anglesec + ")";
      else if (this.terms["sec"].c.isMinusOne()) result += "-\\sec(" + anglesec + ")";
      else {
        let coeffsec = this.terms["sec"].c.str();
        if (this.terms["sec"].c.isGZero()) result += result.length > 0 ? "+" + coeffsec + "\\sec(" + anglesec + ")" : coeffsec + "\\sec(" + anglesec + ")";
        else {
          result += "-" + new Q(-this.terms["sec"].c.num, this.terms["sec"].c.den).str() + "\\sec(" + anglesec + ")";
        }
      }
    }
    if (this.terms["cosec"] && !this.terms["cosec"].c.isZero()) {
      let anglecosec = this.terms["cosec"].a.str();
      if (this.terms["cosec"].c.isOne()) result += "\\cosec(" + anglecosec + ")";
      else if (this.terms["cosec"].c.isMinusOne()) result += "-\\cosec(" + anglecosec + ")";
      else {
        let coeffcosec = this.terms["cosec"].c.str();
        if (this.terms["cosec"].c.isGZero()) result += result.length > 0 ? "+" + coeffcosec + "\\cosec(" + anglecosec + ")" : coeffcosec + "\\cosec(" + anglecosec + ")";
        else {
          result += "-" + new Q(-this.terms["cosec"].c.num, this.terms["cosec"].c.den).str() + "\\cosec(" + anglecosec + ")";
        }
      }
    }
    return result;
  }
  integrate() {
    let newfun = new TrigInt1();
    newfun.terms = {
      "cos": {
        "c": new Q(),
        "a": new LinearQ()
      },
      "sin": {
        "c": new Q(),
        "a": new LinearQ()
      },
      "tan": {
        "c": new Q(),
        "a": new LinearQ()
      },
      "cot": {
        "c": new Q(),
        "a": new LinearQ()
      },
      "sec": {
        "c": new Q(),
        "a": new LinearQ()
      },
      "cosec": {
        "c": new Q(),
        "a": new LinearQ()
      }
    };
    let keys = Object.keys(this.terms);
    for (let i = 0; i < keys.length; i++) {
      switch (keys[i]) {
        case "cos": {
          if (!this.terms[keys[i]].c.isZero()) {
            if (!this.terms[keys[i]].a.isZero()) {
              newfun.terms["sin"].c = this.terms[keys[i]].c.div(this.terms[keys[i]].a.a);
              newfun.terms["sin"].c.reduced();
              newfun.terms["sin"].a = this.terms[keys[i]].a;
            }
          }
          break;
        }
        case "sin": {
          if (!this.terms[keys[i]].c.isZero()) {
            if (!this.terms[keys[i]].a.isZero()) {
              newfun.terms["cos"].c = this.terms[keys[i]].c.div(this.terms[keys[i]].a.a).scale(-1);
              newfun.terms["cos"].c.reduced();
              newfun.terms["cos"].a = this.terms[keys[i]].a;
            }
          }
          break;
        }
        case "sec2": {
          if (!this.terms[keys[i]].c.isZero()) {
            if (!this.terms[keys[i]].a.isZero()) {
              newfun.terms["tan"].c = this.terms[keys[i]].c.div(this.terms[keys[i]].a.a);
              newfun.terms["tan"].c.reduced();
              newfun.terms["tan"].a = this.terms[keys[i]].a;
            }
          }
          break;
        }
        case "cosec2": {
          if (!this.terms[keys[i]].c.isZero()) {
            if (!this.terms[keys[i]].a.isZero()) {
              newfun.terms["cot"].c = this.terms[keys[i]].c.div(this.terms[keys[i]].a.a).scale(-1);
              newfun.terms["cot"].c.reduced();
              newfun.terms["cot"].a = this.terms[keys[i]].a;
            }
          }
          break;
        }
        case "sectan": {
          if (!this.terms[keys[i]].c.isZero()) {
            if (!this.terms[keys[i]].a.isZero()) {
              newfun.terms["sec"].c = this.terms[keys[i]].c.div(this.terms[keys[i]].a.a);
              newfun.terms["sec"].c.reduced();
              newfun.terms["sec"].a = this.terms[keys[i]].a;
            }
          }
          break;
        }
        case "coseccot": {
          if (!this.terms[keys[i]].c.isZero()) {
            if (!this.terms[keys[i]].a.isZero()) {
              newfun.terms["cosec"].c = this.terms[keys[i]].c.div(this.terms[keys[i]].a.a).scale(-1);
              newfun.terms["cosec"].c.reduced();
              newfun.terms["cosec"].a = this.terms[keys[i]].a;
            }
          }
          break;
        }
      }
    }
    return newfun;
  }
  value(x) {
    let sum = 0;
    let keys = Object.keys(this.terms);
    for (let i = 0; i < keys.length; i++) {
      switch (keys[i]) {
        case "cos": {
          sum += this.terms[keys[i]].c.value() * Math.cos(this.terms[keys[i]].a.value(x));
          break;
        }
        case "sin": {
          sum += this.terms[keys[i]].c.value() * Math.sin(this.terms[keys[i]].a.value(x));
          break;
        }
        case "tan": {
          sum += this.terms[keys[i]].c.value() * Math.tan(this.terms[keys[i]].a.value(x));
          break;
        }
        case "cot": {
          sum += this.terms[keys[i]].c.value() / Math.tan(this.terms[keys[i]].a.value(x));
          break;
        }
        case "cosec": {
          sum += this.terms[keys[i]].c.value() / Math.sin(this.terms[keys[i]].a.value(x));
          break;
        }
        case "sec": {
          sum += this.terms[keys[i]].c.value() / Math.cos(this.terms[keys[i]].a.value(x));
          break;
        }
        case "sec2": {
          sum += this.terms[keys[i]].c.value() / Math.pow(Math.cos(this.terms[keys[i]].a.value(x)), 2);
          break;
        }
        case "cosec2": {
          sum += this.terms[keys[i]].c.value() / Math.pow(Math.cos(this.terms[keys[i]].a.value(x)), 2);
          break;
        }
        case "sectan": {
          sum += this.terms[keys[i]].c.value() * Math.tan(this.terms[keys[i]].a.value(x)) / Math.cos(this.terms[keys[i]].a.value(x));
          break;
        }
        case "coseccot": {
          sum += this.terms[keys[i]].c.value() / (Math.sin(this.terms[keys[i]].a.value(x)) * Math.tan(this.terms[keys[i]].a.value(x)));
          break;
        }
      }
    }
    return sum;
  }
  perturb() {
    let keys = Object.keys(this.terms);
    let i = randInt(keys.length - 1, 0);
    let newexpr = new TrigInt1();
    newexpr.terms = {};
    for (let j = 0; j < keys.length; j++) {
      if (j === i) {
        newexpr.terms[keys[j]] = {
          "c": this.terms[keys[j]].c.scale(-1),
          "a": this.terms[keys[j]].a
        };
      } else {
        newexpr.terms[keys[j]] = {
          "c": Math.random() > 0.5 ? this.terms[keys[j]].c.scale(-1) : this.terms[keys[j]].c,
          "a": this.terms[keys[j]].a
        };
      }
    }
    return newexpr;
  }
}
class TrigDif1 {
  //
  constructor(terms = {}) {
    this.terms = terms;
  }
  randT(k = 6) {
    this.terms = {
      "cos": {
        "c": new Q(),
        "a": new LinearQ()
      },
      "sin": {
        "c": new Q(),
        "a": new LinearQ()
      },
      "sec": {
        "c": new Q(),
        "a": new LinearQ()
      },
      "cosec": {
        "c": new Q(),
        "a": new LinearQ()
      },
      "tan": {
        "c": new Q(),
        "a": new LinearQ()
      },
      "cot": {
        "c": new Q(),
        "a": new LinearQ()
      }
    };
    let partSet = new Sets(Object.keys(this.terms));
    let sub = partSet.krandomSubset(k);
    for (let i = 0; i < k; i++) {
      this.terms[sub.e[i]].c.randF(10, 10);
      this.terms[sub.e[i]].a.randL(10, 10, true);
    }
  }
  str() {
    let result = "";
    if (this.terms["cos"] && !this.terms["cos"].c.isZero()) {
      let angleCos = this.terms["cos"].a.str();
      if (this.terms["cos"].c.isOne()) result += "\\cos(" + angleCos + ")";
      else if (this.terms["cos"].c.isMinusOne()) result += "-\\cos(" + angleCos + ")";
      else {
        let coeffCos = this.terms["cos"].c.str();
        if (this.terms["cos"].c.isGZero()) result += result.length > 0 ? "+" + coeffCos + "\\cos(" + angleCos + ")" : coeffCos + "\\cos(" + angleCos + ")";
        else {
          result += "-" + new Q(-this.terms["cos"].c.num, this.terms["cos"].c.den).str() + "\\cos(" + angleCos + ")";
        }
      }
    }
    if (this.terms["sin"] && !this.terms["sin"].c.isZero()) {
      let anglesin = this.terms["sin"].a.str();
      if (this.terms["sin"].c.isOne()) result += "\\sin(" + anglesin + ")";
      else if (this.terms["sin"].c.isMinusOne()) result += "-\\sin(" + anglesin + ")";
      else {
        let coeffsin = this.terms["sin"].c.str();
        if (this.terms["sin"].c.isGZero()) result += result.length > 0 ? "+" + coeffsin + "\\sin(" + anglesin + ")" : coeffsin + "\\sin(" + anglesin + ")";
        else {
          result += "-" + new Q(-this.terms["sin"].c.num, this.terms["sin"].c.den).str() + "\\sin(" + anglesin + ")";
        }
      }
    }
    if (this.terms["sec2"] && !this.terms["sec2"].c.isZero()) {
      let anglesec2 = this.terms["sec2"].a.str();
      if (this.terms["sec2"].c.isOne()) result += "\\sec^2(" + anglesec2 + ")";
      else if (this.terms["sec2"].c.isMinusOne()) result += "-\\sec^2(" + anglesec2 + ")";
      else {
        let coeffsec2 = this.terms["sec2"].c.str();
        if (this.terms["sec2"].c.isGZero()) result += result.length > 0 ? "+" + coeffsec2 + "\\sec^2(" + anglesec2 + ")" : coeffsec2 + "\\sec^2(" + anglesec2 + ")";
        else {
          result += "-" + new Q(-this.terms["sec2"].c.num, this.terms["sec2"].c.den).str() + "\\sec^2(" + anglesec2 + ")";
        }
      }
    }
    if (this.terms["cosec2"] && !this.terms["cosec2"].c.isZero()) {
      let anglecosec2 = this.terms["cosec2"].a.str();
      if (this.terms["cosec2"].c.isOne()) result += "\\cosec^2(" + anglecosec2 + ")";
      else if (this.terms["cosec2"].c.isMinusOne()) result += "-\\cosec^2(" + anglecosec2 + ")";
      else {
        let coeffcosec2 = this.terms["cosec2"].c.str();
        if (this.terms["cosec2"].c.isGZero()) result += result.length > 0 ? "+" + coeffcosec2 + "\\cosec^2(" + anglecosec2 + ")" : coeffcosec2 + "\\cosec^2(" + anglecosec2 + ")";
        else {
          result += "-" + new Q(-this.terms["cosec2"].c.num, this.terms["cosec2"].c.den).str() + "\\cosec^2(" + anglecosec2 + ")";
        }
      }
    }
    if (this.terms["sectan"] && !this.terms["sectan"].c.isZero()) {
      let anglesectan = this.terms["sectan"].a.str();
      if (this.terms["sectan"].c.isOne()) result += "\\sec(" + anglesectan + ")\\tan(" + anglesectan + ")";
      else if (this.terms["sectan"].c.isMinusOne()) result += "-\\sec(" + anglesectan + ")\\tan(" + anglesectan + ")";
      else {
        let coeffsectan = this.terms["sectan"].c.str();
        if (this.terms["sectan"].c.isGZero()) result += result.length > 0 ? "+" + coeffsectan + "\\sec(" + anglesectan + ")\\tan(" + anglesectan + ")" : coeffsectan + "\\sec(" + anglesectan + ")\\tan(" + anglesectan + ")";
        else {
          result += "-" + new Q(-this.terms["sectan"].c.num, this.terms["sectan"].c.den).str() + "\\sec(" + anglesectan + ")\\tan(" + anglesectan + ")";
        }
      }
    }
    if (this.terms["coseccot"] && !this.terms["coseccot"].c.isZero()) {
      let anglecoseccot = this.terms["coseccot"].a.str();
      if (this.terms["coseccot"].c.isOne()) result += "\\cosec(" + anglecoseccot + ")\\cot(" + anglecoseccot + ")";
      else if (this.terms["coseccot"].c.isMinusOne()) result += "-\\cosec(" + anglecoseccot + ")\\cot(" + anglecoseccot + ")";
      else {
        let coeffcoseccot = this.terms["coseccot"].c.str();
        if (this.terms["coseccot"].c.isGZero()) result += result.length > 0 ? "+" + coeffcoseccot + "\\cosec(" + anglecoseccot + ")\\cot(" + anglecoseccot + ")" : coeffcoseccot + "\\cosec(" + anglecoseccot + ")\\cot(" + anglecoseccot + ")";
        else {
          result += "-" + new Q(-this.terms["coseccot"].c.num, this.terms["coseccot"].c.den).str() + "\\cosec(" + anglecoseccot + ")\\cot(" + anglecoseccot + ")";
        }
      }
    }
    if (this.terms["tan"] && !this.terms["tan"].c.isZero()) {
      let angletan = this.terms["tan"].a.str();
      if (this.terms["tan"].c.isOne()) result += "\\tan(" + angletan + ")";
      else if (this.terms["tan"].c.isMinusOne()) result += "-\\tan(" + angletan + ")";
      else {
        let coefftan = this.terms["tan"].c.str();
        if (this.terms["tan"].c.isGZero()) result += result.length > 0 ? "+" + coefftan + "\\tan(" + angletan + ")" : coefftan + "\\tan(" + angletan + ")";
        else {
          result += "-" + new Q(-this.terms["tan"].c.num, this.terms["tan"].c.den).str() + "\\tan(" + angletan + ")";
        }
      }
    }
    if (this.terms["cot"] && !this.terms["cot"].c.isZero()) {
      let anglecot = this.terms["cot"].a.str();
      if (this.terms["cot"].c.isOne()) result += "\\cot(" + anglecot + ")";
      else if (this.terms["cot"].c.isMinusOne()) result += "-\\cot(" + anglecot + ")";
      else {
        let coeffcot = this.terms["cot"].c.str();
        if (this.terms["cot"].c.isGZero()) result += result.length > 0 ? "+" + coeffcot + "\\cot(" + anglecot + ")" : coeffcot + "\\cot(" + anglecot + ")";
        else {
          result += "-" + new Q(-this.terms["cot"].c.num, this.terms["cot"].c.den).str() + "\\cot(" + anglecot + ")";
        }
      }
    }
    if (this.terms["sec"] && !this.terms["sec"].c.isZero()) {
      let anglesec = this.terms["sec"].a.str();
      if (this.terms["sec"].c.isOne()) result += "\\sec(" + anglesec + ")";
      else if (this.terms["sec"].c.isMinusOne()) result += "-\\sec(" + anglesec + ")";
      else {
        let coeffsec = this.terms["sec"].c.str();
        if (this.terms["sec"].c.isGZero()) result += result.length > 0 ? "+" + coeffsec + "\\sec(" + anglesec + ")" : coeffsec + "\\sec(" + anglesec + ")";
        else {
          result += "-" + new Q(-this.terms["sec"].c.num, this.terms["sec"].c.den).str() + "\\sec(" + anglesec + ")";
        }
      }
    }
    if (this.terms["cosec"] && !this.terms["cosec"].c.isZero()) {
      let anglecosec = this.terms["cosec"].a.str();
      if (this.terms["cosec"].c.isOne()) result += "\\cosec(" + anglecosec + ")";
      else if (this.terms["cosec"].c.isMinusOne()) result += "-\\cosec(" + anglecosec + ")";
      else {
        let coeffcosec = this.terms["cosec"].c.str();
        if (this.terms["cosec"].c.isGZero()) result += result.length > 0 ? "+" + coeffcosec + "\\cosec(" + anglecosec + ")" : coeffcosec + "\\cosec(" + anglecosec + ")";
        else {
          result += "-" + new Q(-this.terms["cosec"].c.num, this.terms["cosec"].c.den).str() + "\\cosec(" + anglecosec + ")";
        }
      }
    }
    return result;
  }
  derivative() {
    let newfun = new TrigInt1();
    newfun.terms = {
      "cos": {
        "c": new Q(),
        "a": new LinearQ()
      },
      "sin": {
        "c": new Q(),
        "a": new LinearQ()
      },
      "sec2": {
        "c": new Q(),
        "a": new LinearQ()
      },
      "cosec2": {
        "c": new Q(),
        "a": new LinearQ()
      },
      "sectan": {
        "c": new Q(),
        "a": new LinearQ()
      },
      "coseccot": {
        "c": new Q(),
        "a": new LinearQ()
      }
    };
    let keys = Object.keys(this.terms);
    for (let i = 0; i < keys.length; i++) {
      switch (keys[i]) {
        case "cos": {
          if (!this.terms[keys[i]].c.isZero()) {
            if (!this.terms[keys[i]].a.isZero()) {
              newfun.terms["sin"].c = this.terms[keys[i]].c.mul(this.terms[keys[i]].a.a).scale(-1);
              newfun.terms["sin"].c.reduced();
              newfun.terms["sin"].a = this.terms[keys[i]].a;
            }
          }
          break;
        }
        case "sin": {
          if (!this.terms[keys[i]].c.isZero()) {
            if (!this.terms[keys[i]].a.isZero()) {
              newfun.terms["cos"].c = this.terms[keys[i]].c.mul(this.terms[keys[i]].a.a);
              newfun.terms["cos"].c.reduced();
              newfun.terms["cos"].a = this.terms[keys[i]].a;
            }
          }
          break;
        }
        case "sec": {
          if (!this.terms[keys[i]].c.isZero()) {
            if (!this.terms[keys[i]].a.isZero()) {
              newfun.terms["sectan"].c = this.terms[keys[i]].c.mul(this.terms[keys[i]].a.a);
              newfun.terms["sectan"].c.reduced();
              newfun.terms["sectan"].a = this.terms[keys[i]].a;
            }
          }
          break;
        }
        case "cosec": {
          if (!this.terms[keys[i]].c.isZero()) {
            if (!this.terms[keys[i]].a.isZero()) {
              newfun.terms["coseccot"].c = this.terms[keys[i]].c.mul(this.terms[keys[i]].a.a).scale(-1);
              newfun.terms["coseccot"].c.reduced();
              newfun.terms["coseccot"].a = this.terms[keys[i]].a;
            }
          }
          break;
        }
        case "tan": {
          if (!this.terms[keys[i]].c.isZero()) {
            if (!this.terms[keys[i]].a.isZero()) {
              newfun.terms["sec2"].c = this.terms[keys[i]].c.mul(this.terms[keys[i]].a.a);
              newfun.terms["sec2"].c.reduced();
              newfun.terms["sec2"].a = this.terms[keys[i]].a;
            }
          }
          break;
        }
        case "cot": {
          if (!this.terms[keys[i]].c.isZero()) {
            if (!this.terms[keys[i]].a.isZero()) {
              newfun.terms["cosec2"].c = this.terms[keys[i]].c.mul(this.terms[keys[i]].a.a).scale(-1);
              newfun.terms["cosec2"].c.reduced();
              newfun.terms["cosec2"].a = this.terms[keys[i]].a;
            }
          }
          break;
        }
      }
    }
    return newfun;
  }
  integrate() {
    let newfun = new TrigInt1();
    newfun.terms = {
      "cos": {
        "c": new Q(),
        "a": new LinearQ()
      },
      "sin": {
        "c": new Q(),
        "a": new LinearQ()
      },
      "tan": {
        "c": new Q(),
        "a": new LinearQ()
      },
      "cot": {
        "c": new Q(),
        "a": new LinearQ()
      },
      "sec": {
        "c": new Q(),
        "a": new LinearQ()
      },
      "cosec": {
        "c": new Q(),
        "a": new LinearQ()
      }
    };
    let keys = Object.keys(this.terms);
    for (let i = 0; i < keys.length; i++) {
      switch (keys[i]) {
        case "cos": {
          if (!this.terms[keys[i]].c.isZero()) {
            if (!this.terms[keys[i]].a.isZero()) {
              newfun.terms["sin"].c = this.terms[keys[i]].c.div(this.terms[keys[i]].a.a);
              newfun.terms["sin"].c.reduced();
              newfun.terms["sin"].a = this.terms[keys[i]].a;
            }
          }
          break;
        }
        case "sin": {
          if (!this.terms[keys[i]].c.isZero()) {
            if (!this.terms[keys[i]].a.isZero()) {
              newfun.terms["cos"].c = this.terms[keys[i]].c.div(this.terms[keys[i]].a.a).scale(-1);
              newfun.terms["cos"].c.reduced();
              newfun.terms["cos"].a = this.terms[keys[i]].a;
            }
          }
          break;
        }
        case "sec2": {
          if (!this.terms[keys[i]].c.isZero()) {
            if (!this.terms[keys[i]].a.isZero()) {
              newfun.terms["tan"].c = this.terms[keys[i]].c.div(this.terms[keys[i]].a.a);
              newfun.terms["tan"].c.reduced();
              newfun.terms["tan"].a = this.terms[keys[i]].a;
            }
          }
          break;
        }
        case "cosec2": {
          if (!this.terms[keys[i]].c.isZero()) {
            if (!this.terms[keys[i]].a.isZero()) {
              newfun.terms["cot"].c = this.terms[keys[i]].c.div(this.terms[keys[i]].a.a).scale(-1);
              newfun.terms["cot"].c.reduced();
              newfun.terms["cot"].a = this.terms[keys[i]].a;
            }
          }
          break;
        }
        case "sectan": {
          if (!this.terms[keys[i]].c.isZero()) {
            if (!this.terms[keys[i]].a.isZero()) {
              newfun.terms["sec"].c = this.terms[keys[i]].c.div(this.terms[keys[i]].a.a);
              newfun.terms["sec"].c.reduced();
              newfun.terms["sec"].a = this.terms[keys[i]].a;
            }
          }
          break;
        }
        case "coseccot": {
          if (!this.terms[keys[i]].c.isZero()) {
            if (!this.terms[keys[i]].a.isZero()) {
              newfun.terms["cosec"].c = this.terms[keys[i]].c.div(this.terms[keys[i]].a.a).scale(-1);
              newfun.terms["cosec"].c.reduced();
              newfun.terms["cosec"].a = this.terms[keys[i]].a;
            }
          }
          break;
        }
      }
    }
    return newfun;
  }
  value(x) {
    let sum = 0;
    let keys = Object.keys(this.terms);
    for (let i = 0; i < keys.length; i++) {
      switch (keys[i]) {
        case "cos": {
          sum += this.terms[keys[i]].c.value() * Math.cos(this.terms[keys[i]].a.value(x));
          break;
        }
        case "sin": {
          sum += this.terms[keys[i]].c.value() * Math.sin(this.terms[keys[i]].a.value(x));
          break;
        }
        case "tan": {
          sum += this.terms[keys[i]].c.value() * Math.tan(this.terms[keys[i]].a.value(x));
          break;
        }
        case "cot": {
          sum += this.terms[keys[i]].c.value() / Math.tan(this.terms[keys[i]].a.value(x));
          break;
        }
        case "cosec": {
          sum += this.terms[keys[i]].c.value() / Math.sin(this.terms[keys[i]].a.value(x));
          break;
        }
        case "sec": {
          sum += this.terms[keys[i]].c.value() / Math.cos(this.terms[keys[i]].a.value(x));
          break;
        }
        case "sec2": {
          sum += this.terms[keys[i]].c.value() / Math.pow(Math.cos(this.terms[keys[i]].a.value(x)), 2);
          break;
        }
        case "cosec2": {
          sum += this.terms[keys[i]].c.value() / Math.pow(Math.cos(this.terms[keys[i]].a.value(x)), 2);
          break;
        }
        case "sectan": {
          sum += this.terms[keys[i]].c.value() * Math.tan(this.terms[keys[i]].a.value(x)) / Math.cos(this.terms[keys[i]].a.value(x));
          break;
        }
        case "coseccot": {
          sum += this.terms[keys[i]].c.value() / (Math.sin(this.terms[keys[i]].a.value(x)) * Math.tan(this.terms[keys[i]].a.value(x)));
          break;
        }
      }
    }
    return sum;
  }
  perturb() {
    let keys = Object.keys(this.terms);
    let i = randInt(keys.length - 1, 0);
    let newexpr = new TrigInt1();
    newexpr.terms = {};
    for (let j = 0; j < keys.length; j++) {
      if (j === i) {
        newexpr.terms[keys[j]] = {
          "c": this.terms[keys[j]].c.scale(-1),
          "a": this.terms[keys[j]].a
        };
      } else {
        newexpr.terms[keys[j]] = {
          "c": Math.random() > 0.5 ? this.terms[keys[j]].c.scale(-1) : this.terms[keys[j]].c,
          "a": this.terms[keys[j]].a
        };
      }
    }
    return newexpr;
  }
}

export { TrigDif1 as T, TrigInt1 as a };
//# sourceMappingURL=function-DuoHaT2E.js.map
