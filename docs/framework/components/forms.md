# Forms


TODO


Forms provide the most common control styles used in forms, including input, textarea, select, checkbox, radio and switch.

### Input

<div class="sui-example">
    <div class="form-group">
        <label class="form-label" for="input-example-1-1">Name</label>
        <input class="form-input" id="input-example-1-1" placeholder="Name" type="text">
    </div>
    <div class="form-group">
        <label class="form-label" for="input-example-1-2">Email</label>
        <input class="form-input" id="input-example-1-2" placeholder="Email" type="email">
    </div>
</div>

``` html
<div class="form-group">
    <label class="form-label" for="input-example-1">Name</label>
    <input class="form-input" id="input-example-1" placeholder="Name" type="text">
</div>
```

#### Types

<div class="sui-example">
    <div class="form-group">
        <div class="col w-1/4">
            <label class="form-label" for="input-example-8">Email</label>
        </div>
        <div class="col w-3/4">
            <input class="form-input" id="input-example-8" placeholder="Email" type="email">
        </div>
    </div>
    <div class="form-group">
        <div class="col w-1/4">
            <label class="form-label" for="input-example-9">URL</label>
        </div>
        <div class="col w-3/4">
            <input class="form-input" id="input-example-9" placeholder="URL" type="url">
        </div>
    </div>
    <div class="form-group">
        <div class="col w-1/4">
            <label class="form-label" for="input-example-10">Search</label>
        </div>
        <div class="col w-3/4">
            <input class="form-input" id="input-example-10" placeholder="Search" type="search">
        </div>
    </div>
    <div class="form-group">
        <div class="col w-1/4">
            <label class="form-label" for="input-example-11">Tel</label>
        </div>
        <div class="col w-3/4">
            <input class="form-input" id="input-example-11" placeholder="Tel" type="tel">
        </div>
    </div>
    <div class="form-group">
        <div class="col w-1/4">
            <label class="form-label" for="input-example-12">Password</label>
        </div>
        <div class="col w-3/4">
            <input class="form-input" id="input-example-12" placeholder="Password" type="password">
        </div>
    </div>
    <div class="form-group">
        <div class="col w-1/4">
            <label class="form-label" for="input-example-13">Number</label>
        </div>
        <div class="col w-3/4">
            <input class="form-input" id="input-example-13" placeholder="00" type="number">
        </div>
    </div>
    <div class="form-group">
        <div class="col w-1/4">
            <label class="form-label" for="input-example-14">Date</label>
        </div>
        <div class="col w-3/4">
            <input class="form-input" id="input-example-14" type="date">
        </div>
    </div>
    <div class="form-group">
        <div class="col w-1/4">
            <label class="form-label" for="input-example-15">Color</label>
        </div>
        <div class="col w-3/4">
            <input class="form-input" id="input-example-15" type="color">
        </div>
    </div>
    <div class="form-group">
        <div class="col w-1/4">
            <label class="form-label" for="input-example-16">File</label>
        </div>
        <div class="col w-3/4">
            <input class="form-input" id="input-example-16" type="file">
        </div>
    </div>
</div>


``` html
<input class="form-input" id="input-example-8" placeholder="Email" type="email">
<input class="form-input" id="input-example-9" placeholder="URL" type="url">
<input class="form-input" id="input-example-10" placeholder="Search" type="search">
<input class="form-input" id="input-example-11" placeholder="Tel" type="tel">
<input class="form-input" id="input-example-12" placeholder="Password" type="password">
<input class="form-input" id="input-example-13" placeholder="00" type="number">
<input class="form-input" id="input-example-14" type="date">
<input class="form-input" id="input-example-15" type="color">
<input class="form-input" id="input-example-16" type="file">
```


#### Sizing

<div class="sui-example">
    <div class="form-group">
        <label class="form-label" for="input-example-2-1">Small</label>
        <input class="form-input input-sm" id="input-example-2-1" placeholder="Small" type="text">
    </div>
    <div class="form-group">
        <label class="form-label" for="input-example-2-2">Normal</label>
        <input class="form-input" id="input-example-2-2" placeholder="Normal" type="text">
    </div>
    <div class="form-group">
        <label class="form-label" for="input-example-2-3">Large</label>
        <input class="form-input input-lg" id="input-example-2-3" placeholder="Large" type="text">
    </div>
</div>


``` html
<div class="form-group">
    <label class="form-label" for="input-example-2-1">Small</label>
    <input class="form-input input-sm" id="input-example-2-1" placeholder="Small" type="text">
</div>

<div class="form-group">
    <label class="form-label" for="input-example-2-2">Normal</label>
    <input class="form-input" id="input-example-2-2" placeholder="Normal" type="text">
</div>

<div class="form-group">
    <label class="form-label" for="input-example-2-3">Large</label>
    <input class="form-input input-lg" id="input-example-2-3" placeholder="Large" type="text">
</div>
```


### Textarea

<div class="sui-example">
    <div class="form-group">
        <label class="form-label" for="input-example-3">Message</label> 
        <textarea class="form-input" id="input-example-3" placeholder="Textarea" rows="3"></textarea>
    </div>
</div>

``` html
<div class="form-group">
    <label class="form-label" for="input-example-3">Message</label> 
    <textarea class="form-input" id="input-example-3" placeholder="Textarea" rows="3"></textarea>
</div>
```


### Select

<div class="sui-example">
    <div class="form-group">
        <select class="form-select">
            <option>Choose an option</option>
            <option>Slack</option>
            <option>Skype</option>
            <option>Hipchat</option>
        </select>
    </div>
    <div class="form-group">
        <select class="form-select" multiple>
            <option>Choose an option</option>
            <option>Slack</option>
            <option>Skype</option>
            <option>Hipchat</option>
        </select>
    </div>
</div>

``` html
<div class="form-group">
    <select class="form-select">
        <option>Choose an option</option>
        <option>Slack</option>
        <option>Skype</option>
        <option>Hipchat</option>
    </select>
</div>

<div class="form-group">
    <select class="form-select" multiple>
        <option>Choose an option</option>
        <option>Slack</option>
        <option>Skype</option>
        <option>Hipchat</option>
    </select>
</div>
```

#### Sizing

<div class="sui-example">
    <div class="form-group">
        <select class="form-select select-sm">
            <option>Choose an option</option>
            <option>Slack</option>
            <option>Skype</option>
            <option>Hipchat</option>
        </select>
    </div>
    <div class="form-group">
        <select class="form-select">
            <option>Choose an option</option>
            <option>Slack</option>
            <option>Skype</option>
            <option>Hipchat</option>
        </select>
    </div>
    <div class="form-group">
        <select class="form-select select-lg">
            <option>Choose an option</option>
            <option>Slack</option>
            <option>Skype</option>
            <option>Hipchat</option>
        </select>
    </div>
</div>

``` html
<div class="form-group">
    <select class="form-select select-sm">
        <option>Choose an option</option>
        <option>Slack</option>
        <option>Skype</option>
        <option>Hipchat</option>
    </select>
</div>

<div class="form-group">
    <select class="form-select">
        <option>Choose an option</option>
        <option>Slack</option>
        <option>Skype</option>
        <option>Hipchat</option>
    </select>
</div>

<div class="form-group">
    <select class="form-select select-lg">
        <option>Choose an option</option>
        <option>Slack</option>
        <option>Skype</option>
        <option>Hipchat</option>
    </select>
</div>
```


### Radio

<div class="sui-example">
    <div class="form-group">
        <label class="form-label">Gender</label>
        <div class="form-radio input-sm">
            <input checked id="customRadio1-1" name="gender-1" type="radio">
            <label class="form-check-label" for="customRadio1-1">Male</label>
        </div>
        <div class="form-radio input-sm">
            <input id="customRadio1-2" name="gender-1" type="radio">
            <label class="form-check-label" for="customRadio1-2">Female</label>
        </div>
    </div>
    <div class="form-group">
        <label class="form-label">Gender</label>
        <div class="form-radio">
            <input checked id="customRadio2-1" name="gender-2" type="radio">
            <label class="form-check-label" for="customRadio2-1">Male</label>
        </div>
        <div class="form-radio">
            <input id="customRadio2-2" name="gender-2" type="radio">
            <label class="form-check-label" for="customRadio2-2">Female</label>
        </div>
    </div>
    <div class="form-group">
        <label class="form-label">Gender</label>
        <div class="form-radio input-lg">
            <input checked id="customRadio3-1" name="gender-3" type="radio">
            <label class="form-check-label" for="customRadio3-1">Male</label>
        </div>
        <div class="form-radio input-lg">
            <input id="customRadio3-2" name="gender-3" type="radio">
            <label class="form-check-label" for="customRadio3-2">Female</label>
        </div>
    </div>
</div>

``` html
<div class="form-group">
    <label class="form-label">Gender</label>

    <div class="form-radio">
        <input checked id="customRadio1" name="gender" type="radio">
        <label class="form-check-label" for="customRadio1">Male</label>
    </div>

    <div class="form-radio">
        <input id="customRadio2" name="gender" type="radio">
        <label class="form-check-label" for="customRadio2">Female</label>
    </div>
</div>
```

### Checkbox

<div class="sui-example">
    <div class="form-group">
        <div class="form-checkbox input-sm">
            <input id="customCheck1-1" type="checkbox">
            <label class="form-check-label" for="customCheck1-1">Remember me</label>
        </div>
        <div class="form-checkbox input-sm">
            <input checked id="customCheck1-2" type="checkbox">
            <label class="form-check-label" for="customCheck1-2">Remember me</label>
        </div>
    </div>
    <div class="form-group">
        <div class="form-checkbox">
            <input id="customCheck2-1" type="checkbox">
            <label class="form-check-label" for="customCheck2-1">Remember me</label>
        </div>
        <div class="form-checkbox">
            <input checked id="customCheck2-2" type="checkbox">
            <label class="form-check-label" for="customCheck2-2">Remember me</label>
        </div>
    </div>
    <div class="form-group">
        <div class="form-checkbox input-lg">
            <input id="customCheck3-1" type="checkbox">
            <label class="form-check-label" for="customCheck3-1">Remember me</label>
        </div>
        <div class="form-checkbox input-lg">
            <input checked id="customCheck3-2" type="checkbox">
            <label class="form-check-label" for="customCheck3-2">Remember me</label>
        </div>
    </div>
</div>

``` html
<div class="form-group">
    <div class="form-checkbox">
        <input id="customCheck1" type="checkbox">
        <label class="form-check-label" for="customCheck1">Remember me</label>
    </div>

    <div class="form-checkbox">
        <input checked id="customCheck2" type="checkbox">
        <label class="form-check-label" for="customCheck2">Remember me</label>
    </div>
</div>
```


### Switch 

<div class="sui-example">
    <div class="form-group">
        <div class="form-switch input-sm">
            <input id="customSwitch1-1" type="checkbox">
            <label class="form-check-label" for="customSwitch1-1">Send me emails with news and tips</label>
        </div>
        <div class="form-switch input-sm">
            <input checked id="customSwitch1-2" type="checkbox">
            <label class="form-check-label" for="customSwitch1-2">Send me emails with news and tips</label>
        </div>
    </div>
    <div class="form-group">
        <div class="form-switch">
            <input id="customSwitch2-1" type="checkbox">
            <label class="form-check-label" for="customSwitch2-1">Send me emails with news and tips</label>
        </div>
        <div class="form-switch">
            <input checked id="customSwitch2-2" type="checkbox">
            <label class="form-check-label" for="customSwitch2-2">Send me emails with news and tips</label>
        </div>
    </div>
    <div class="form-group">
        <div class="form-switch input-lg">
            <input id="customSwitch3-1" type="checkbox">
            <label class="form-check-label" for="customSwitch3-1">Send me emails with news and tips</label>
        </div>
        <div class="form-switch input-lg">
            <input checked id="customSwitch3-2" type="checkbox">
            <label class="form-check-label" for="customSwitch3-2">Send me emails with news and tips</label>
        </div>
    </div>
</div>

``` html
<div class="form-group">
    <div class="form-switch">
        <input id="customSwitch1" type="checkbox">
        <label class="form-check-label" for="customSwitch1">Send me emails with news and tips</label>
    </div>

    <div class="form-switch">
        <input checked id="customSwitch2" type="checkbox">
        <label class="form-check-label" for="customSwitch2">Send me emails with news and tips</label>
    </div>
</div>
```


## Layout

### Form Groups

<div class="sui-example">
    <div class="form-group">
        <label for="formGroupExampleInput">Example label</label>
        <input class="form-input" id="formGroupExampleInput" placeholder="Example input" type="text">
    </div>
    <div class="form-group">
        <label for="formGroupExampleInput2">Another label</label>
        <input class="form-input" id="formGroupExampleInput2" placeholder="Another input" type="text">
    </div>
</div>

``` html
<div class="form-group">
    <label for="formGroupExampleInput">Example label</label>
    <input class="form-input" id="formGroupExampleInput" placeholder="Example input" type="text">
</div>

<div class="form-group">
    <label for="formGroupExampleInput2">Another label</label>
    <input class="form-input" id="formGroupExampleInput2" placeholder="Another input" type="text">
</div>
```


## Form grid

<div class="sui-example">
    <div class="row">
        <div class="col">
            <input class="form-input" placeholder="First name" type="text">
        </div>
        <div class="col">
            <input class="form-input" placeholder="Last name" type="text">
        </div>
    </div>
</div>

``` html
<div class="row">
    <div class="col">
        <input class="form-input" placeholder="First name" type="text">
    </div>

    <div class="col">
        <input class="form-input" placeholder="Last name" type="text">
    </div>
</div>
```

## Form row

<div class="sui-example">
    <div class="form-row">
        <div class="col">
            <input class="form-input" placeholder="First name" type="text">
        </div>
        <div class="col">
            <input class="form-input" placeholder="Last name" type="text">
        </div>
    </div>
</div>

``` html
<div class="form-row">
    <div class="col">
        <input class="form-input" placeholder="First name" type="text">
    </div>

    <div class="col">
        <input class="form-input" placeholder="Last name" type="text">
    </div>
</div>
```

## Horizontal form

<div class="sui-example">
    <div class="form-group row">
        <label class="col w-2/12 col-form-label" for="inputEmail3">Email</label>
        <div class="col w-10/12">
            <input class="form-input" id="inputEmail3" placeholder="Email" type="email">
        </div>
    </div>
    <div class="form-group row">
        <label class="col w-2/12 col-form-label" for="inputPassword3">Password</label>
        <div class="col w-10/12">
            <input class="form-input" id="inputPassword3" placeholder="Password" type="password">
        </div>
    </div>
    <fieldset class="form-group">
        <div class="row">
            <legend class="col-form-label col w-2/12 pt-0">Radios</legend>
            <div class="col w-10/12">
                <div class="form-radio">
                    <input id="gridRadios1" type="radio">
                    <label class="form-check-label" for="gridRadios1">First radio</label>
                </div>
                <div class="form-radio">
                    <input id="gridRadios2" type="radio">
                    <label class="form-check-label" for="gridRadios2">Second radio</label>
                </div>
                <div class="form-radio disabled">
                    <input id="gridRadios3" type="radio">
                    <label class="form-check-label" for="gridRadios3">Third disabled radio</label>
                </div>
            </div>
        </div>
    </fieldset>
    <div class="form-group row">
        <div class="col w-2/12">Checkbox</div>
        <div class="col w-10/12">
            <div class="form-checkbox">
                <input id="gridCheck1" type="checkbox">
                <label class="form-check-label" for="gridCheck1">Remember me</label>
            </div>
        </div>
    </div>
    <div class="form-group row">
        <div class="col w-10/12">
            <button class="btn btn-primary" type="submit">Sign in</button>
        </div>
    </div>
</div>

``` html
<div class="form-group row">
    <label class="col w-2/12 col-form-label" for="inputEmail3">Email</label>

    <div class="col w-10/12">
        <input class="form-input" id="inputEmail3" placeholder="Email" type="email">
    </div>
</div>

<div class="form-group row">
    <label class="col w-2/12 col-form-label" for="inputPassword3">Password</label>

    <div class="col w-10/12">
        <input class="form-input" id="inputPassword3" placeholder="Password" type="password">
    </div>
</div>

<fieldset class="form-group">
    <div class="row">
        <legend class="col-form-label col w-2/12 pt-0">Radios</legend>

        <div class="col w-10/12">
            <div class="form-radio">
                <input id="gridRadios1" type="radio">
                <label class="form-check-label" for="gridRadios1">First radio</label>
            </div>

            <div class="form-radio">
                <input id="gridRadios2" type="radio">
                <label class="form-check-label" for="gridRadios2">Second radio</label>
            </div>

            <div class="form-radio disabled">
                <input id="gridRadios3" type="radio">
                <label class="form-check-label" for="gridRadios3">Third disabled radio</label>
            </div>
        </div>
    </div>
</fieldset>

<div class="form-group row">
    <div class="col w-2/12">Checkbox</div>

    <div class="col w-10/12">
        <div class="form-checkbox">
            <input id="gridCheck1" type="checkbox">
            <label class="form-check-label" for="gridCheck1">Remember me</label>
        </div>
    </div>
</div>

<div class="form-group row">
    <div class="col w-10/12">
        <button class="btn btn-primary" type="submit">Sign in</button>
    </div>
</div>
```


## Inline forms

<div class="sui-example">
    <form class="form-inline">
        <div class="form-group">
            <div class="form-radio">
                <input checked id="inlineRadio1" type="radio">
                <label class="form-check-label" for="inlineRadio1">Male</label>
            </div>
            <div class="form-radio">
                <input id="inlineRadio2" type="radio">
                <label class="form-check-label" for="inlineRadio2">Female</label>
            </div>
        </div>
        <div class="form-group">
            <div class="form-checkbox">
                <input id="inlineCheck1" type="checkbox">
                <label class="form-check-label" for="inlineCheck1">Checkbox 1</label>
            </div>
            <div class="form-checkbox">
                <input checked id="inlineCheck2" type="checkbox">
                <label class="form-check-label" for="inlineCheck2">Checkbox 2</label>
            </div>
        </div>
    </form>
</div>

``` html
<form class="form-inline">
    <div class="form-group">
        <div class="form-radio">
            <input checked id="inlineRadio1" type="radio">
            <label class="form-check-label" for="inlineRadio1">Male</label>
        </div>

        <div class="form-radio">
            <input id="inlineRadio2" type="radio">
            <label class="form-check-label" for="inlineRadio2">Female</label>
        </div>
    </div>

    <div class="form-group">
        <div class="form-checkbox">
            <input id="inlineCheck1" type="checkbox">
            <label class="form-check-label" for="inlineCheck1">Checkbox 1</label>
        </div>

        <div class="form-checkbox">
            <input checked id="inlineCheck2" type="checkbox">
            <label class="form-check-label" for="inlineCheck2">Checkbox 2</label>
        </div>
    </div>
</form>
```


<div class="sui-example">
    <form class="form-inline">
        <label class="sr-only" for="inlineFormInputName2">Name</label>
        <input class="form-input" id="inlineFormInputName2" placeholder="Jane Doe" type="text">
        <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
        <div class="input-group">
            <input class="form-input" id="inlineFormInputGroupUsername2" placeholder="Username" type="text">
        </div>
        <div class="form-checkbox">
            <input class="form-check-input" id="inlineFormCheck" type="checkbox">
            <label class="form-check-label" for="inlineFormCheck">Remember me</label>
        </div>
        <button class="btn btn-primary" type="submit">Submit</button>
    </form>
</div>

``` html
<form class="form-inline">
    <label class="sr-only" for="inlineFormInputName2">Name</label>
    <input class="form-input" id="inlineFormInputName2" placeholder="Jane Doe" type="text">
    <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>

    <div class="input-group">
        <input class="form-input" id="inlineFormInputGroupUsername2" placeholder="Username" type="text">
    </div>

    <div class="form-checkbox">
        <input class="form-check-input" id="inlineFormCheck" type="checkbox">
        <label class="form-check-label" for="inlineFormCheck">Remember me</label>
    </div>

    <button class="btn btn-primary" type="submit">Submit</button>
</form>
```

## Help text

<div class="sui-example">
    <label for="inputPassword5">Password</label>
    <input aria-describedby="passwordHelpBlock" class="form-input" id="inputPassword5" type="password">
    <small class="block mt-1 text-gray-600" id="passwordHelpBlock">Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.</small>
</div>


``` html
<label for="inputPassword5">Password</label>
<input aria-describedby="passwordHelpBlock" class="form-input" id="inputPassword5" type="password">
<small class="block mt-1 text-gray-600" id="passwordHelpBlock">Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.</small>
```


<div class="sui-example">
    <form class="form-inline">
        <div class="form-group">
            <label for="inputPassword6">Password</label>
            <input aria-describedby="passwordHelpInline" class="form-input" id="inputPassword6" type="password">
            <small class="text-gray-600" id="passwordHelpInline">Must be 8-20 characters long.</small>
        </div>
    </form>
</div>


``` html
<form class="form-inline">
    <div class="form-group">
        <label for="inputPassword6">Password</label>
        <input aria-describedby="passwordHelpInline" class="form-input" id="inputPassword6" type="password">
        <small class="text-gray-600" id="passwordHelpInline">Must be 8-20 characters long.</small>
    </div>
</form>
```


You can use the `.loading` class for loading or posting state.

<div class="sui-example">
    <div class="form-row row">
        <div class="col w-4/12">
            <div class="has-icon-right">
                <input class="form-input input-sm" placeholder="Name" type="text"><i class="form-icon loading"></i>
            </div>
        </div>
        <div class="col w-4/12">
            <div class="has-icon-right">
                <input class="form-input" placeholder="Name" type="text"><i class="form-icon loading"></i>
            </div>
        </div>
        <div class="col w-4/12">
            <div class="has-icon-right">
                <input class="form-input input-lg" placeholder="Name" type="text"><i class="form-icon loading"></i>
            </div>
        </div>
    </div>
</div>

``` html
<div class="form-row row">
    <div class="col w-4/12">
        <div class="has-icon-right">
            <input class="form-input input-sm" placeholder="Name" type="text"><i class="form-icon loading"></i>
        </div>
    </div>

    <div class="col w-4/12">
        <div class="has-icon-right">
            <input class="form-input" placeholder="Name" type="text"><i class="form-icon loading"></i>
        </div>
    </div>

    <div class="col w-4/12">
        <div class="has-icon-right">
            <input class="form-input input-lg" placeholder="Name" type="text"><i class="form-icon loading"></i>
        </div>
    </div>
</div>
```

## Validation

<div class="sui-example">
    <div class="form-row">
        <div class="col w-4/12 mb-3">
            <label for="validationServer01">First name</label>
            <input class="form-input is-valid" id="validationServer01" placeholder="First name" required="" type="text" value="Mark">
            <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="col w-4/12 mb-3">
            <label for="validationServer02">Last name</label>
            <input class="form-input is-valid" id="validationServer02" placeholder="Last name" required="" type="text" value="Otto">
            <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="col w-4/12 mb-3">
            <label for="validationServerUsername">Username</label>
            <input aria-describedby="inputGroupPrepend3" class="form-input is-invalid" id="validationServerUsername" placeholder="Username" required="" type="text">
            <div class="invalid-feedback">Please choose a username.</div>
        </div>
    </div>
    <div class="form-row">
        <div class="col w-1/2 mb-3">
            <label for="validationServer03">City</label>
            <input class="form-input is-invalid" id="validationServer03" placeholder="City" required="" type="text">
            <div class="invalid-feedback">Please provide a valid city.</div>
        </div>
        <div class="col w-1/4 mb-3">
            <label for="validationServer04">State</label>
            <input class="form-input is-invalid" id="validationServer04" placeholder="State" required="" type="text">
            <div class="invalid-feedback">Please provide a valid state.</div>
        </div>
        <div class="col w-1/4 mb-3">
            <label for="validationServer05">Zip</label>
            <input class="form-input is-invalid" id="validationServer05" placeholder="Zip" required="" type="text">
            <div class="invalid-feedback">Please provide a valid zip.</div>
        </div>
    </div>
    <div class="form-group">
        <div class="form-checkbox">
            <input class="form-check-input is-invalid" id="invalidCheck3" required="" type="checkbox" value="">
            <label class="form-check-label" for="invalidCheck3">Agree to terms and conditions</label>
            <div class="invalid-feedback">You must agree before submitting.</div>
        </div>
    </div>
    <button class="btn btn-primary" type="submit">Submit form</button>
</div>

``` html
<div class="form-row">
    <div class="col w-4/12 mb-3">
        <label for="validationServer01">First name</label>
        <input class="form-input is-valid" id="validationServer01" placeholder="First name" required="" type="text" value="Mark">
        <div class="valid-feedback">Looks good!</div>
    </div>

    <div class="col w-4/12 mb-3">
        <label for="validationServer02">Last name</label>
        <input class="form-input is-valid" id="validationServer02" placeholder="Last name" required="" type="text" value="Otto">
        <div class="valid-feedback">Looks good!</div>
    </div>

    <div class="col w-4/12 mb-3">
        <label for="validationServerUsername">Username</label>
        <input aria-describedby="inputGroupPrepend3" class="form-input is-invalid" id="validationServerUsername" placeholder="Username" required="" type="text">
        <div class="invalid-feedback">Please choose a username.</div>
    </div>
</div>

<div class="form-row">
    <div class="col w-1/2 mb-3">
        <label for="validationServer03">City</label>
        <input class="form-input is-invalid" id="validationServer03" placeholder="City" required="" type="text">
        <div class="invalid-feedback">Please provide a valid city.</div>
    </div>

    <div class="col w-1/4 mb-3">
        <label for="validationServer04">State</label>
        <input class="form-input is-invalid" id="validationServer04" placeholder="State" required="" type="text">
        <div class="invalid-feedback">Please provide a valid state.</div>
    </div>

    <div class="col w-1/4 mb-3">
        <label for="validationServer05">Zip</label>
        <input class="form-input is-invalid" id="validationServer05" placeholder="Zip" required="" type="text">
        <div class="invalid-feedback">Please provide a valid zip.</div>
    </div>
</div>

<div class="form-group">
    <div class="form-checkbox">
        <input class="form-check-input is-invalid" id="invalidCheck3" required="" type="checkbox" value="">
        <label class="form-check-label" for="invalidCheck3">Agree to terms and conditions</label>
        <div class="invalid-feedback">You must agree before submitting.</div>
    </div>
</div>

<button class="btn btn-primary" type="submit">Submit form</button>
```


<div class="sui-example">
    <form>
        <div class="form-checkbox">
            <input class="is-invalid" id="customControlValidation1" required="" type="checkbox">
            <label class="form-check-label" for="customControlValidation1">Check this custom checkbox</label>
            <div class="invalid-feedback">Example invalid feedback text</div>
        </div>
        <div class="form-radio">
            <input class="is-invalid" id="customControlValidation2" name="radio-stacked" required="" type="radio">
            <label class="form-check-label" for="customControlValidation2">Toggle this custom radio</label>
        </div>
        <div class="form-radio">
            <input class="is-invalid" id="customControlValidation3" name="radio-stacked" required="" type="radio">
            <label class="form-check-label" for="customControlValidation3">Or toggle this other custom radio</label>
            <div class="invalid-feedback">More example invalid feedback text</div>
        </div>
        <div class="form-group">
            <select class="is-invalid form-select" required="">
                <option value="">Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <div class="invalid-feedback">
                Example invalid custom select feedback
            </div>
        </div>
    </form>
</div>

``` html
<div class="form-checkbox">
    <input class="is-invalid" id="customControlValidation1" required="" type="checkbox">
    <label class="form-check-label" for="customControlValidation1">Check this custom checkbox</label>
    <div class="invalid-feedback">Example invalid feedback text</div>
</div>

<div class="form-radio">
    <input class="is-invalid" id="customControlValidation2" name="radio-stacked" required="" type="radio">
    <label class="form-check-label" for="customControlValidation2">Toggle this custom radio</label>
</div>

<div class="form-radio">
    <input class="is-invalid" id="customControlValidation3" name="radio-stacked" required="" type="radio">
    <label class="form-check-label" for="customControlValidation3">Or toggle this other custom radio</label>
    <div class="invalid-feedback">More example invalid feedback text</div>
</div>

<div class="form-group">
    <select class="is-invalid form-select" required="">
        <option value="">Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </select>

    <div class="invalid-feedback">
        Example invalid custom select feedback
    </div>
</div>
```
