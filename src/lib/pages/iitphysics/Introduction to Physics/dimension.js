import {Sets} from '$lib/utils/common/sets';
import { Q } from '$lib/utils/common/fraction';
import { randInt } from '$lib/utils/common/common';
export class Dimensions {// {b: 'L', c: 0}, {b: 'M', c: 0}, {b: 'T', c: 0}, {b: 'K', c: 0}, {b: 'I', c: 0}, {b: 'mol', c: 0}, {b: 'cd', c: 0}, {b: 'rad', c: 0}, {b: 'sr', c: 0}
    constructor(formula = [{b: 'L', c: 0}, {b: 'M', c: 0}, {b: 'T', c: 0}, {b: 'K', c: 0}, {b: 'I', c: 0}, {b: 'mol', c: 0}, {b: 'cd', c: 0}, {b: 'rad', c: 0}, {b: 'sr', c: 0}]) { // [{b: 'L', c: 2}]
        this.formula = formula;
    }
    sortB() {
        this.formula.sort((a1, a2) => a1.b.localeCompare(a2.b));
    }
    sortC() {
        this.formula.sort((a, b) => a.c - b.c);
    }
    randomDimensions(bases, distinctPowers = false) {
        let r, power;
        this.formula = [];
        if(distinctPowers) {
            let sts = new Sets();
            sts.randomSet(-2*bases.length, 2*bases.length, bases.length);
            for(let i = 0; i < bases.length; i++) {
                this.formula.push({b: bases[i], c: sts.e[i]});
            }
        } else {
            bases.forEach(base => {
                r = Math.random();
                if(r < 0.5) {
                    power = new Q();
                    power.randF(5, 5);
                } else {
                    power = randInt(5, -5)
                }
                this.formula.push({b: base, c: power})
            })
        }
        
    }
    dimensionOf(base) {
        this.formula.forEach(term => {
            if(term.b === base) return term.c
        })
        return 0;
    }
    equal(s) {
        if(this.formula.length != s.formula.length) return false;
        this.sortB();
        s.sortB();
        for(let i = 0; i < this.formula.length; i++) {
            if(this.formula[i].b != s.formula[i].b || this.formula[i].c != s.formula[i].c)
                return false;
        }
        return true;
    }
    hasBase(b) {
        let itHas = false;
        for(let i = 0; i < this.formula.length; i++) {
            if(this.formula[i].b === b) {
                itHas = true;
            }
        }
        return itHas;
    }
    isZero() {
        for(let i = 0; i < this.formula.length; i++) {
            if(this.formula[i].c instanceof Q) {
                if(!this.formula[i].c.isZero()) return false;
            } else if(this.formula[i].c !== 0) return false;
        }
        return true;
    }
    termMul(s) {
        let newDimensions = new Dimensions([]);
        let hasupdated = false;
        for(let i = 0; i < this.formula.length; i++) {
            if(this.formula[i].b === s.b) {
                if(this.formula.c instanceof Q)
                    newDimensions.formula.push({b: this.formula[i].b, c: this.formula[i].c.add(s.c)})
                else if(s.c instanceof Q)
                    newDimensions.formula.push({b: this.formula[i].b, c: s.c.add(this.formula[i].c)})
                else
                    newDimensions.formula.push({b: this.formula[i].b, c: s.c + this.formula[i].c})
                hasupdated = true;
            } else {
                newDimensions.formula.push(this.formula[i])
            }
        }
        if(!hasupdated) {
            newDimensions.formula.push(s);
        }
        return newDimensions;
    }
    mul(s) {
        
        let newDimensions = s;
        
        this.formula.forEach(term => {
            newDimensions = newDimensions.termMul(term)
        })
        return newDimensions;
    }
    div(s) {
        let newDimensions = new Dimensions([]);
        s.formula.forEach(term => {
            if(term.c instanceof Q) {
                newDimensions.formula.push({b: term.b, c: term.c.scale(-1)})
            } else {
                newDimensions.formula.push({b: term.b, c: -term.c})
            }
            
        })
        return this.mul(newDimensions);
    }
    power(k) {
        let newDimensions = new Dimensions([]);
        this.formula.forEach(item => {
            if(k instanceof Q) {
                newDimensions.formula.push({b: item.b, c: k.mul(item.c)})
            } else {
                if(item.c instanceof Q) {
                    newDimensions.formula.push({b: item.b, c: item.c.mul(k)})
                } else {
                    newDimensions.formula.push({b: item.b, c: item.c * k})
                }
            }
        })
        return newDimensions;
    }
    transform(oldBasis, oldDimensions) {//in the same order
        //oldBasis = {name: dimensions}
        let dimensionParts = [];
        
        for(let i = 0; i < oldDimensions.formula.length; i++) {
            
            dimensionParts.push(oldBasis[oldDimensions.formula[i].b].power(oldDimensions.formula[i].c))
        }
        let newDimensions = dimensionParts[0];
        for(let i = 1; i < dimensionParts.length; i++) {
            newDimensions = newDimensions.mul(dimensionParts[i]);
        }
        this.formula = newDimensions.formula;
    }
    reciprocate() {
        let newDimensions = new Dimensions([]);
        this.formula.forEach(item => {
            if(item.c instanceof Q) {
                newDimensions.formula.push({b: item.b, c: item.c.scale(-1)})
            } else {
                newDimensions.formula.push({b: item.b, c: -item.c})
            }        
        })
        return newDimensions;
    }
    str(withMult = false) {

        let str = '';
        if(this.formula.length == 0) return '';
        if(this.formula.length == 1 && this.formula[0].c == 0) return '';
        if(!(this.formula[0].c instanceof Q)) {
            if(this.formula[0].c === 0) str = str + '';
            else if(this.formula[0].c === 1) str = str + '\\text{' +  this.formula[0].b + '}'; 
            else {
                str = str + ' ' + '\\text{' +  this.formula[0].b + '}' + '^{' + this.formula[0].c + '}';
            }
        } else {
            str = str + ' ' + '\\text{' +  this.formula[0].b + '}' + '^{' + this.formula[0].c.str() + '}';
        } 
        for(let i = 1; i < this.formula.length; i++) {
            if(!(this.formula[i].c instanceof Q)) {
                if(this.formula[i].c === 0) str = str + '';
                else if(this.formula[i].c === 1) str = str + (withMult && str.length > 0? '\\times': '') + ' \\text{' +  this.formula[i].b + '}'; 
                else {
                    str = str + ' '+ (withMult && str.length > 0? '\\times': '')  +  ' \\text{' +  this.formula[i].b + '}' + '^{' + this.formula[i].c + '}';
                }
            } else {
                str = str + ' '+ (withMult && str.length > 0? '\\times': '')  + '\\text{' +  this.formula[i].b + '}' + '^{' + this.formula[i].c.str() + '}';
            }   
        }
        
        return str;
    }
    texstr(withMult = false) {
        let hasNegativeDims = false;
        this.formula.forEach(item => {
            if(item.c instanceof Q) {
                if(item.c.num < 0) hasNegativeDims = true;
            } else {
                if(item.c < 0)
                    hasNegativeDims = true;
            }
        })
        if(!hasNegativeDims) return this.str();
        let numerator = new Dimensions([]), denominator = new Dimensions([]);
        this.formula.forEach(item => {
            if((item.c instanceof Q && item.c.num < 0) || item.c < 0 ) {
                denominator.formula.push(item)
            } else {
                numerator.formula.push(item);
            }
        })
        let rdenominator = denominator.reciprocate();
        return `\\frac{${numerator.isZero() ? 1 : numerator.str(withMult)}}{${rdenominator.str(withMult)}}` 
    }
}



export const physicalQuantities = {
    distance : {name: 'distance', symbol: 'd', dimensions: new Dimensions([{b: 'L', c: 1}])},
    time : {name: 'time', symbol: 't', dimensions: new Dimensions([{b: 'T', c: 1}])},
    mass : {name: 'mass', symbol: 'm', dimensions: new Dimensions([{b: 'M', c: 1}])},
    current : {name: 'current', symbol: 'i', dimensions: new Dimensions([{b: 'I', c: 1}])},
    temperature: {name: 'temperature', symbol: 'T', dimensions: new Dimensions([{b: 'K', c: 1}])},
    mol: {name: 'mole', symbol: 'mol', dimensions: new Dimensions([{b: 'mol', c: 1}])},
    candela: {name: 'candela', symbol: 'cd', dimensions: new Dimensions([{b: 'cd', c: 1}])},
    area : {name: 'area', symbol: 'A', dimensions: new Dimensions([{b: 'L', c: 2}])},
    volume : {name: 'volume', symbol: 'V', dimensions: new Dimensions([{b: 'L', c: 1}, {b: 'T', c: -2}])},
    density : {name: 'density', symbol: '\\rho', dimensions: new Dimensions([{b: 'M', c: 1}, {b: 'L', c: -3}])},
    speed : {name: 'speed', symbol: 'u', dimensions: new Dimensions([{b: 'L', c: 1}, {b: 'T', c: -1}])},
    velocity : {name: 'velocity', symbol: 'v', dimensions: new Dimensions([{b: 'L', c: 1}, {b: 'T', c: -1}])},
    acceleration : {name: 'acceleration', symbol: 'a', dimensions: new Dimensions([{b: 'L', c: 1}, {b: 'T', c: -2}])},
    momentum : {name: 'momentum', symbol: 'p', dimensions: new Dimensions([{b: 'M', c: 1}, {b: 'L', c: 1}, {b: 'T', c: -1}])},
    force : {name: 'force', symbol: 'F', dimensions: new Dimensions([{b: 'M', c: 1}, {b: 'L', c: 1}, {b: 'T', c: -2}])},
    energy : {name: 'energy', symbol: 'E', dimensions: new Dimensions([{b: 'M', c: 1}, {b: 'L', c: 2}, {b: 'T', c: -2}])},
    work : {name: 'work', symbol: 'W', dimensions: new Dimensions([{b: 'M', c: 1}, {b: 'L', c: 2}, {b: 'T', c: -2}])},
    power : {name: 'power', symbol: 'P', dimensions: new Dimensions([{b: 'M', c: 1}, {b: 'L', c: 2}, {b: 'T', c: -3}])},
    G : {name: 'gravitational constant', symbol: 'G', dimensions: new Dimensions([{b: 'M', c: -1}, {b: 'L', c: 3}, {b: 'T', c: -2}])},
    angularvelocity: {name: 'angular velocity', symbol: '\\omega', dimensions: new Dimensions([{b: 'T', c: -1}])},
    angularacceleration: {name: 'angular acceleration', symbol: '\\alpha', dimensions: new Dimensions([{b: 'T', c: -2}])},
    angularmomentum: {name: 'angular momentum', symbol: 'L', dimensions: new Dimensions([{b: 'M', c: 1}, {b: 'L', c: 2}, {b: 'T', c: -1}])},
    momentofinertia: {name: 'moment of inertia', symbol: 'I', dimensions: new Dimensions([{b: 'M', c: 1}, {b: 'L', c: 2}])},
    torque: {name: 'torque', symbol: '\\tau', dimensions: new Dimensions([{b: 'M', c: 1}, {b: 'L', c: 2}, {b: 'T', c: -2}])},
    angularfrequency: {name: 'angular frequency', symbol: '\\omega', dimensions: new Dimensions([{b: 'T', c: -1}])},
    frequency: {name: 'frequency', symbol: '\\nu', dimensions: new Dimensions([{b: 'T', c: -1}])},
    period: {name: 'period', symbol: 'T', dimensions: new Dimensions([{b: 'T', c: 1}])},
    youngsmodulus: {name: `Young's modulus`, symbol: 'Y', dimensions: new Dimensions([{b: 'M', c: 1}, {b: 'L', c: -1}, {b: 'T', c: -2}])},
    bulkmodulus: {name: `bulk modulus`, symbol: 'B', dimensions: new Dimensions([{b: 'M', c: 1}, {b: 'L', c: -1}, {b: 'T', c: -2}])},
    shearmodulus: {name: `shear modulus`, symbol: '\\eta', dimensions: new Dimensions([{b: 'M', c: 1}, {b: 'L', c: -1}, {b: 'T', c: -2}])},
    surfacetension: {name: `surface tension`, symbol: 'S', dimensions: new Dimensions([{b: 'M', c: 1}, {b: 'T', c: -2}])},
    viscosity: {name: `coefficient of viscosity`, symbol: '\\eta', dimensions: new Dimensions([{b: 'M', c: 1}, {b: 'L', c: -1}, {b: 'T', c: -1}])},
    pressure: {name: `pressure`, symbol: 'P', dimensions: new Dimensions([{b: 'M', c: 1}, {b: 'L', c: -1}, {b: 'T', c: -2}])},
    wavelength: {name: `wavelength`, symbol: '\\lambda', dimensions: new Dimensions([{b: 'L', c: 1}])},
    intensityofwave: {name: `intensity of wave`, symbol: 'I', dimensions: new Dimensions([{b: 'M', c: 1}, {b: 'T', c: -3}])},
    specificheatcapacity: {name: `specific heat capacity`, symbol: 'c', dimensions: new Dimensions([{b: 'L', c: 2}, {b: 'T', c: -2}, {b: 'K', c: -1}])},
    stefansconstant: {name: `Stefan's constant`, symbol: '\\sigma', dimensions: new Dimensions([{b: 'M', c: 1}, {b: 'T', c: -3}, {b: 'K', c: -4}])},
    heat: {name: `heat`, symbol: 'Q', dimensions: new Dimensions([{b: 'M', c: 1}, {b: 'L', c: 2}, {b: 'T', c: -2}])},
    thermalconductivity: {name: `thermal conductivity`, symbol: 'K', dimensions: new Dimensions([{b: 'M', c: 1}, {b: 'L', c: 1}, {b: 'T', c: -3}, {b: 'K', c: -1}])},
    charge : {name: 'charge', symbol: 'q', dimensions: new Dimensions([{b: 'I', c: 1}, {b: 'T', c: 1}])},
    currentdensity : {name: 'current density', symbol: 'j', dimensions: new Dimensions([{b: 'I', c: 1}, {b: 'L', c: -2}])},
    electricalconductivity : {name: 'electrical conductivity', symbol: '\\sigma', dimensions: new Dimensions([{b: 'M', c: -1}, {b: 'L', c: -3},{b: 'T', c: 3}, {b: 'I', c: 2}])},
    electricaldipolemoment : {name: 'electrical dipole moment', symbol: 'p', dimensions: new Dimensions([{b: 'L', c: 1},{b: 'T', c: 1}, {b: 'I', c: 1}])},
    efield : {name: 'electric field', symbol: 'E', dimensions: new Dimensions([{b: 'M', c: 1}, {b: 'L', c: 1}, {b: 'T', c: -3}, {b: 'I', c: -1}])},
    epotential : {name: 'electric potential', symbol: 'V', dimensions: new Dimensions([{b: 'M', c: 1}, {b: 'L', c: 2}, {b: 'T', c: -3}, {b: 'I', c: -1}])},
    electricflux : {name: 'electric flux', symbol: '\\Phi', dimensions: new Dimensions([{b: 'M', c: 1}, {b: 'L', c: 3}, {b: 'T', c: -3}, {b: 'I', c: -1}])},
    capacitance : {name: 'capacitance', symbol: 'C', dimensions: new Dimensions([{b: 'M', c: -1}, {b: 'L', c: -2}, {b: 'T', c: 4}, {b: 'I', c: 2}])},
    emf : {name: 'emf', symbol: 'E', dimensions: new Dimensions([{b: 'M', c: 1}, {b: 'L', c: 2}, {b: 'T', c: -3}, {b: 'I', c: -1}])},
    resistance : {name: 'resistance', symbol: 'R', dimensions: new Dimensions([{b: 'M', c: 1}, {b: 'L', c: 2}, {b: 'T', c: -3}, {b: 'I', c: -2}])},
    permittivity : {name: 'permittivity', symbol: '\\epsilon_0', dimensions: new Dimensions([{b: 'M', c: -1}, {b: 'L', c: -3}, {b: 'T', c: 4}, {b: 'I', c: 2}])},
    permeability : {name: 'permeability', symbol: '\\mu_0', dimensions: new Dimensions([{b: 'M', c: 1}, {b: 'L', c: 1}, {b: 'T', c: -2}, {b: 'I', c: -2}])},
    mfield : {name: 'magnetic field', symbol: 'B', dimensions: new Dimensions([{b: 'M', c: 1}, {b: 'T', c: -2}, {b: 'I', c: -1}])},
    mflux : {name: 'magnetic flux', symbol: '\\Phi_B', dimensions: new Dimensions([{b: 'M', c: 1}, {b: 'L', c: 2}, {b: 'T', c: -2}, {b: 'I', c: -1}])},
    mdipole : {name: 'magnetic dipole moment', symbol: '\\mu', dimensions: new Dimensions([{b: 'L', c: 2}, {b: 'I', c: 1}])},
    inductance : {name: 'inductance', symbol: 'L', dimensions: new Dimensions([{b: 'M', c: 1}, {b: 'L', c: 2}, {b: 'T', c: -2}, {b: 'I', c: -2}])},
}