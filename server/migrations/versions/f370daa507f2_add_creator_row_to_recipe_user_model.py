"""add creator row to Recipe-User model

Revision ID: f370daa507f2
Revises: b0445b9a1ff0
Create Date: 2024-07-01 10:54:18.293976

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f370daa507f2'
down_revision = 'b0445b9a1ff0'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('recipe_users', schema=None) as batch_op:
        batch_op.add_column(sa.Column('creator', sa.Boolean(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('recipe_users', schema=None) as batch_op:
        batch_op.drop_column('creator')

    # ### end Alembic commands ###