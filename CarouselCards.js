import React, {useState} from 'react';
import I18nText from '../../../../@fuse/components/i18nText/I18nText';
import { Divider, Icon, Typography, IconButton, Button } from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({}));

const CarouselCards = (props) => {
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
    <div className="flex items-center w-full">
          <div className="flex self-center">
            <IconButton className={classes.button} disableRipple onClick={previous}>
              <Icon className={classes.buttonIcon} color="action">keyboard_arrow_left</Icon>
            </IconButton>
          </div>
          <div className="flex self-start w-full md:flex-wrap justify-between">
            <div className="flex ">{nombres[step]}</div><div className="flex ">{updatedDate}</div>
              <ul className="list-none w-full">
                <li key="1"><Divider/></li>
                <li key="2"><I18nText text='voltage'></I18nText>: {voltajes[step]} [V]</li>
                <li key="3"><I18nText text='amperage'></I18nText>: {amperajes[step]} [A]</li>
                <li key="4"><I18nText text='pon'></I18nText>: {pons[step]} [mV]</li>
                <li key="5"><I18nText text='poff'></I18nText>: {poffs[step]} [mV]</li>
                <li key="6"><I18nText text='vbatt'></I18nText>: {vbatts[step]} [V]</li>
              </ul>
              <div className="justify-center w-full sm:p-0">
                  <ul className="list-none w-full">
                    {nombresEstados.map((nombreEstado, i) => {
                      return (<li key={i} className={onEstados[i] === true ? 'bg-red-light w-full sm:p-4 lg:my-2' : 'bg-green w-full sm:p-4 lg:my-2'}>{nombreEstado}</li>);
                    })}
                  </ul>
                  </div>
              <Divider className="h-44" />
              <div className="justify-center w-full py-12">
                 <ul className="list-none w-full">
                      {nombresAlertas.map((nombreAlerta, i) => {
                      return (<li key={i} className={onAlertas[i] === true ? 'bg-red-light w-full sm:p-4 lg:my-2' : 'bg-green w-full sm:p-4 lg:my-2'}>{nombreAlerta}</li>);
                    })}
                  </ul>
                </div>
          </div>
          <div className="flex self-center">
                <IconButton className={classes.button} disableRipple onClick={next}>
                  <Icon className={classes.buttonIcon} color="action">keyboard_arrow_right</Icon>
                </IconButton>
          </div>
   </div>
  );
};

export default CarouselCards;