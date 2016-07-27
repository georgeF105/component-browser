import React from 'react'
import { Link } from 'react-router'
import { Card, CardTitle, CardText, CardMenu, CardActions, IconButton } from 'react-mdl'


export default (props) => {
	return (
		<Card className="mdl-cell mdl-cel--4-col" shadow={0}>
			<CardTitle expand>Part</CardTitle>
			<CardText>Description</CardText>
			<CardActions>

			</CardActions>
			<CardMenu>
				<IconButton name="print"/>
			</CardMenu>
		</Card>
	)
}