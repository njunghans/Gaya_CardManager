{{csrf_field()}}

<div class="form-group row">
    {{ Form::label('name' , 'Name:' , array('class' => 'col-sm-2 control-label')) }}
    <div class="col-sm-5">
        {{ Form::text('name' , null , array('class' => 'form-control', 'required')) }}
    </div>
</div>

<div class="form-group row">
    {{ Form::label('category_text' , 'Category Text:' , array('class' => 'col-sm-2 control-label')) }}
    <div class="col-sm-5">
        {{ Form::text('category_text' , null , array('class' => 'form-control', 'required')) }}
    </div>
</div>

<div class="form-group row">
    {{ Form::label('cost_gold' , 'Cost Gold:' , array('class' => 'col-sm-2 control-label')) }}
    <div class="col-sm-5">
        {{ Form::number('cost_gold' , null , array('class' => 'form-control', 'min' => -99, 'max' => 99)) }}
    </div>
</div>

<div class="form-group row">
    {{ Form::label('cost_bio' , 'Cost Biological:' , array('class' => 'col-sm-2 control-label')) }}
    <div class="col-sm-5">
        {{ Form::number('cost_bio' , null , array('class' => 'form-control', 'min' => -99, 'max' => 99)) }}
    </div>
</div>

<div class="form-group row">
    {{ Form::label('cost_ene' , 'Cost Energy:' , array('class' => 'col-sm-2 control-label')) }}
    <div class="col-sm-5">
        {{ Form::number('cost_ene' , null , array('class' => 'form-control', 'min' => -99, 'max' => 99)) }}
    </div>
</div>

<div class="form-group row">
    {{ Form::label('cost_art' , 'Cost Artificial:' , array('class' => 'col-sm-2 control-label')) }}
    <div class="col-sm-5">
        {{ Form::number('cost_art' , null , array('class' => 'form-control', 'min' => -99, 'max' => 99)) }}
    </div>
</div>

<div class="form-group row">
    {{ Form::label('cost_par' , 'Cost Parasitic:' , array('class' => 'col-sm-2 control-label')) }}
    <div class="col-sm-5">
        {{ Form::number('cost_par' , null , array('class' => 'form-control', 'min' => -99, 'max' => 99)) }}
    </div>
</div>

<div class="form-group row">
    {{ Form::label('attack' , 'Attack:' , array('class' => 'col-sm-2 control-label')) }}
    <div class="col-sm-5">
        {{ Form::number('attack' , null , array('class' => 'form-control', 'min' => -99, 'max' => 99)) }}
    </div>
</div>

<div class="form-group row">
    {{ Form::label('life' , 'Life:' , array('class' => 'col-sm-2 control-label')) }}
    <div class="col-sm-5">
        {{ Form::number('life' , null , array('class' => 'form-control', 'min' => -99, 'max' => 99)) }}
    </div>
</div>

<div class="form-group row">
    {{ Form::label('shield' , 'Shield:' , array('class' => 'col-sm-2 control-label')) }}
    <div class="col-sm-5">
        {{ Form::number('shield' , null , array('class' => 'form-control', 'min' => -99, 'max' => 99)) }}
    </div>
</div>

<div class="form-group row">
    {{ Form::label('range' , 'Range:' , array('class' => 'col-sm-2 control-label')) }}
    <div class="col-sm-5">
        {{ Form::number('range' , null , array('class' => 'form-control', 'min' => -99, 'max' => 99)) }}
    </div>
</div>

<div class="form-group row">
    {{ Form::label('card_effect' , 'Effect:' , array('class' => 'col-sm-2 control-label')) }}
    <div class="col-sm-5">
        {{ Form::textarea('card_effect' , null , ['rows' => '4' , 'class' => 'form-control' , 'placeholder' => 'Enter card effect here']) }}
    </div>
</div>

<div class="form-group row">
    {{ Form::label('lore_text' , 'Lore Text:' , array('class' => 'col-sm-2 control-label')) }}
    <div class="col-sm-5">
        {{ Form::textarea('lore_text' , null , ['rows' => '4' , 'class' => 'form-control' , 'placeholder' => 'Enter lore text here']) }}
    </div>
</div>

<div class="form-group row">
    {{ Form::label('image_path' , 'Image Path:' , array('class' => 'col-sm-2 control-label')) }}
    <div class="col-sm-5">
        {{ Form::text('image_path' , null , array('class' => 'form-control')) }}
    </div>
</div>


