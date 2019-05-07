import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'engtohun' })
export class EngToHunPipe implements PipeTransform {

    transform(english: string): string {
        let hungarian: string;

        if (english === 'M') {
            hungarian = 'Férfi';
        }
        if (english === 'F') {
            hungarian = 'Nő';
        }
        if (english === 'Never used') {
            hungarian = 'Nem doházik';
        }
        if (english === 'Current use or use within 1 month of admission') {
            hungarian = 'Dohányzó';
        }
        if (english === 'Former user - stopped more than 1 year ago') {
            hungarian = 'Leszokott (több mint egy éve)';
        }
        if (english === 'Stopped more than 1 month ago, but less than 1 year ago') {
            hungarian = 'Leszokott (több mint egyhónapja)';
        }
        if (english === 'Bronchial') {
            hungarian = 'Hörgő';
        }
        if (english === 'Exp Wheeze') {
            hungarian = 'Kilégzéskor ziháló';
        }
        if (english === 'Diminished') {
            hungarian = 'Gyenge';
        }
        if (english === 'Crackles') {
            hungarian = 'Ropogó';
        }
        if (english === 'Clear') {
            hungarian = 'Tiszta';
        }
        if (english === 'Absent') {
            hungarian = 'Hiányos';
        }
        if (english === 'Rhonchi') {
            hungarian = 'Zajos';
        }
        if (english === 'Insp Wheeze') {
            hungarian = 'Belégzéskor ziháló';
        }
        if (english === 'Pleural Friction') {
            hungarian = 'Pleurális dörzszörej';
        }
        if (english === 'Coarse') {
            hungarian = 'Dúrva';
        }
        if (english === 'Ins/Exp Wheeze') {
            hungarian = 'Be- és kilégzéskor ziháló';
        }
        return hungarian;
    }
}
