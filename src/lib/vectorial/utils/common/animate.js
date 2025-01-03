import { Point } from "./point";
import { Path } from './path';
export class Animate {
    constructor(
        {
            id,
            href,
            attributeName,
            attributeType = 'XML',
            values = '',//"0;5;1"
            begin = "0s",
            end = "None",
            min = "0s",
            max = "None",
            restart = "always",//always, whenNotActive, never
            dur = '2s',
            keyTimes = "",//between 0, 1 [0;0.25;0.5;1]
            keySplines = "",//cubic bezier 0.5 0 0 1; 0.5 0 0 1
            from = "None",
            to = "None",
            by = "None",
            calcMode = 'linear', // discrete, linear, paced, spline
            repeatCount = "None",// number, indefinite
            repeatDur = "None",// 5s, indefinite
            fill = "freeze", // freeze, remove
            additive = "replare", //replace, sum
            accumulate = "none"// none, sum
            }={}) {
            this.id = id,
            this.href = href,
            this.attributeName = attributeName,
            this.attributeType = attributeType,
            this.values = values,
            this.begin = begin,
            this.end = end,
            this.min = min,
            this.max = max,
            this.restart = restart,
            this.dur = dur,
            this.keyTimes = keyTimes,
            this.keySplines = keySplines
            this.from = from,
            this.to = to,
            this.by = by,
            this.calcMode = calcMode,
            this.repeatCount = repeatCount,
            this.repeatDur = repeatDur,
            this.fill = fill,
            this.additive = additive,
            this.accumulate = accumulate
    }
    duplicate() {
        let anim = new Animate({...this});
        return anim;
    }
    hydrate() {
    }
    transformUIControls() {
        
    }
}