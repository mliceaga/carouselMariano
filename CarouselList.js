import React, {useState} from 'react';
import I18nText from '../../../../@fuse/components/i18nText/I18nText';
import { Divider, Icon, IconButton } from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  buttonIcon   : {
    transition: theme.transitions.create(['transform'], {
        easing  : theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.short 
    })
  },
}));

const CarouselList = (props) => {
    const classes = useStyles(props);
    const {outputsList = [], updatedDate = [], estados = [], alertas = [], category = {}} = props;
    
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
          <div className="flex self-start">
            <IconButton className={classes.button} disableRipple onClick={previous}>
              <Icon className={classes.buttonIcon} color="action">keyboard_arrow_left</Icon>
            </IconButton>
          </div>
          <div className="flex justify-center w-full">
              <ul className="list-none w-full">
                <li className="text-14" key='1'>{nombres[step]}</li>
                <li><Divider/></li>
                <li><I18nText text='voltage' key='2'></I18nText>: {voltajes[step]} [V]</li>
                <li><I18nText text='amperage' key='3'></I18nText>: {amperajes[step]} [A]</li>
                <li><I18nText text='pon' key='4'></I18nText>: {pons[step]} [mV]</li>
                <li><I18nText text='poff' key='5'></I18nText>: {poffs[step]} [mV]</li>
                <li><I18nText text='vbatt' key='6'></I18nText>: {vbatts[step]} [V]</li>
              </ul>
              <div className="justify-center w-full sm:p-0">
                  <ul className="list-none w-full">
                    {nombresEstados.map((nombreEstado, i) => {
                      return (<li key={i} className={onEstados[i] === true ? 'bg-red-light w-full sm:p-4 lg:my-2' : 'bg-green w-full sm:p-4 lg:my-2'}>{nombreEstado}</li>);
                    })}
                  </ul>
                  </div>
              <Divider className="sm:h-28" />
              <div className="justify-center w-full">
                 <ul className="list-none w-full">
                      {nombresAlertas.map((nombreAlerta, i) => {
                      return (<li key={i} className={onAlertas[i] === true ? 'bg-red-light w-full sm:p-4 lg:my-2' : 'bg-green w-full sm:p-4 lg:my-2'}>{nombreAlerta}</li>);
                    })}
                  </ul>
                </div>
          </div>
          <div className="flex self-start">
                <IconButton className={classes.button} disableRipple onClick={next}>
                  <Icon className={classes.buttonIcon} color="action">keyboard_arrow_right</Icon>
                </IconButton>
          </div>
   </div>
  );
};

export default CarouselList;