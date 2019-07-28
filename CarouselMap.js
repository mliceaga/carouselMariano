import React, {useState} from 'react';
import I18nText from '../../../../@fuse/components/i18nText/I18nText';
import { Divider, Icon, Typography, IconButton, Button } from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({}));

const CarouselMap = (props) => {
    const classes = useStyles(props);
    const {outputsList = [], updatedDate = [], estados = [], alertas = []} = props;
    
    const initialStep = 0;
    
    const [step, setStep] = useState(initialStep);

    const deltaSetStep = (delta = 1) => {
      setStep((step + steps + delta) % steps);
    };

  function next() { deltaSetStep(1)};
  function previous() {deltaSetStep(-1)};

  let result = outputsList[step].map((a) => a);
  let nombres = result.map((a) => a.nombre);
  //let fechas = result.map((a) => a.fecha);
  let voltajes = result.map((a) => a.voltaje);
  let amperajes = result.map((a) => a.amperaje);
  let pons = result.map((a) => a.pon);
  let poffs = result.map((a) => a.poff);
  let vbatts = result.map((a) => a.vbatt);
  
  const steps = result.length;

  let resultEstados = estados[step].map((a) => a);
  let nombresEstados = resultEstados.map((a) => a.nombre);
  let onEstados = resultEstados.map((a) => a.on);
  let resultAlertas = alertas[step].map((a) => a);
  let nombresAlertas = resultAlertas.map((a) => a.nombre);
  let onAlertas = resultAlertas.map((a) => a.on);

  return (
    <div className="flex w-full sm:flex-col items-center">
            <div className="flex sm:py-3">{nombres[step]}&nbsp;&nbsp;&nbsp;{updatedDate}</div>
            <div className="flex w-full sm:flex-col items-center">
              <div className="flex "><I18nText text='voltage'></I18nText>: {voltajes[step]} [V]</div>
              <div className="flex "><I18nText text='amperage'></I18nText>: {amperajes[step]} [A]</div>
              <div className="flex "><I18nText text='pon'></I18nText>: {pons[step]} [mV]</div>
              <div className="flex "><I18nText text='poff'></I18nText>: {poffs[step]} [mV]</div>
              <div className="flex "><I18nText text='vbatt'></I18nText>: {vbatts[step]} [V]</div>
            </div>
   </div>
  );
};

export default CarouselMap;