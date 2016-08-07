import React from 'react'
import { Link } from 'react-router'
import { Card, CardTitle, CardText, CardMenu, CardActions, IconButton } from 'react-mdl'


export default (props) => {
	const part = props.part
	return (
		<Card className="mdl-cell mdl-cel--4-col" shadow={0}>
			<CardTitle expand>{part.partNumber}</CardTitle>
			<CardText>{part.description}</CardText>
			<CardActions>

			</CardActions>
			<CardMenu>
				<IconButton name="print"/>
			</CardMenu>
		</Card>
	)
}