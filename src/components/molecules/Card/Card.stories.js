import React from 'react';
import Card from './Card';

export const Primary = () => <Card />;
export const Secondary = () => <Card cardType="twitter" />;
export const Tertiary = () => <Card cardType="article" />;

export default { title: '/Moleculs/Card', component: Card };
